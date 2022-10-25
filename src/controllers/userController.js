const UserSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');

//CRUD
const getAll = async (req, res) => {
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

module.exports = {
  getAll,
  createUser, //Glauber
  updateUserById //Glauber
};