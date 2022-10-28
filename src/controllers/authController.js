const UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');//Jessany

//Código abaixo criado por Jessany 

/*const SECRET = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCExyOHwYTIciXCPQI3kyQYtM6JJZv1laf9kCrfSTZdlfdR5iD/WeF6zKnTx69YXZjQsBLSdCRdFjmGrdBBMXVNEEO/zbK0YFNiUxnhkoDIVBkgZjexW6hiHqk+r2z8Kw+fJPwsENkfR7dmDZt+ef0pywKwDZZEadwfsQAwDoHMmQIDAQAB"*/
const SECRET = process.env.SECRET

const login = (req, res) => {
    try {
        UserSchema.findOne({ email: req.body.email }, (error, user) => {
            if (!user) {
                return res.status(401).send({
                    message: "Usuário não encontrado",
                    email: `${req.body.email}`
                })
            }

            const validPassword = bcrypt.compareSync(req.body.password, user.password)

            if (!validPassword) {
                return res.status(401).send({
                    message: "Login não autorizado"
                })
            }

            const token = jwt.sign({ name: user.name }, SECRET)

            res.status(200).send({
                message: "Login autorizado",
                token
            })
        })

    } catch (e) {
        console.error(e)
    }

};

module.exports = {
    login
};