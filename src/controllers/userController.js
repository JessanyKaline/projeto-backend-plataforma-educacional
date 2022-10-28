const UserSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');//Glauber - Necessário importar para validar o token

//SECRET copiado do authController
//SECRET adicionado na variavel no .env
/*const SECRET = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCExyOHwYTIciXCPQI3kyQYtM6JJZv1laf9kCrfSTZdlfdR5iD/WeF6zKnTx69YXZjQsBLSdCRdFjmGrdBBMXVNEEO/zbK0YFNiUxnhkoDIVBkgZjexW6hiHqk+r2z8Kw+fJPwsENkfR7dmDZt+ef0pywKwDZZEadwfsQAwDoHMmQIDAQAB"*/
const SECRET = process.env.SECRET


//CRUD
const getAll = async (req, res) => {
  //Trecho de autenticação de login criado por Glauber:
  const authHeader = req.get('authorization') //Ve se chega algo no HEADER
  //console.log("HEADER", authHeader)
  const token = authHeader.split(' ')[1]; //Acesso o token
  //console.log("TOKEN", token)

  //Verifico se o TOKEN existe
  if(!token) {
    return res.status(401).send("Erro no header")
  }

  //Para validar o token (jsonwebtoken) e visualizar as informações:
  jwt.verify(token, SECRET, (err) => {
    if(err) {
      return res.status(401).send("Não Autorizado")
    }
  })

  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};


//Trecho abaixo criado por Glauber, continuando o (CRUD):
const createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)

    req.body.password = hashedPassword

    try {
      const newUser = new UserSchema(req.body);

      const savedUser = await newUser.save()

      res.status(201).send({
        "message": "Usuário criado com sucesso!",
        savedUser
      })
    
    } catch (e) {
      console.error(e)
    }
  
}

const updateUserById = async (req, res) => {
  try {
      const findUser = await UserSchema.findById(req.params.id)

      if (!findUser) {            
          res.status(404).send("Usuário não encontrado!")
      };

      findUser.name = req.body.name || findUser.name
      findUser.email = req.body.email || findUser.email

      const savedUser = await findUser.save()

      res.status(200).json({
          message: "Usuário atualizado com sucesso!",
          savedUser
      })

  } catch (error) {
      console.error(error)
  }
}

const deleteUserById= async (req, res) => {
  try {
      const userFound = await UserSchema.findById(req.params.id)

      await userFound.delete()

      const savedUser = await findUser.save()

      res.status(200).json({
          message: `Usuário '${userFound.email} deletado com sucesso!`
    
      })

  } catch (error) {
      console.error(error)
  }
}

module.exports = {
  getAll,
  createUser, //Glauber
  updateUserById, //Glauber
  deleteUserById, //Jessany

};