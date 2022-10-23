
/*const userRoutes = (app) => {
    app.get('/usuario', (req, res) => {
        console.log(req.query)
        res.send(req.query.name)
    })
    app.get('/usuario/:id', (req, res) => {
        console.log(req.params)
        const user = {
            id: req.params.id,
            name: req.query.name,
            age: req.query.age
        }
        res.send(user)
    })
}

module.exports = userRoutes;*/

//TRECHO DE CÓDIGO ACIMA CRIADO NA MENTORIA COMO UMA OUTRA FORMA DE REALIZAR

const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get("/all", controller.getAll);

module.exports = router;