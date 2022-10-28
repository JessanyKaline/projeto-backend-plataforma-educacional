
//import express from "express"; Não deu certo por ter que usar o dotenv-safe
//import cors from "cors"; OPTEI POR MANTER O QUE APRENDEMOS EM AULA

const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv-safe').config(); //Deixei o dotenv aqui, conforme orientação na aula da Paula. GLAUBER

const db = require('./config/database');
const userRoutes = require('./routes/userRoutes'); //Glauber

db.connect();

//GLAUBER: Inseri os app.use:
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

module.exports = app;

//export default app
//export {app} - ESSA É A FORMA QUE FOI VISTA NA MENTORIA, MAS NÃO ESTÁ DANDO CERTO, PORQUE TEM OUTRAS CONFIGURAÇÕES COM O "REQUIRE"