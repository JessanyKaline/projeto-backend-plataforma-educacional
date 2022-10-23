
//import express from "express"; Não deu certo por ter que usar o dotenv-safe
//import cors from "cors"; OPTEI POR MANTER O QUE APRENDEMOS EM AULA

const express = require("express");
const app = express();
const cors = require("cors");


//app.use(cors()); - PROVAVELMENTE USAREMOS ESSES DOIS TRECHOS
//app.use(express.json())

require('dotenv-safe').config(); 

const db = require('./config/database');
db.connect();

/* AS LINHA 13(L) ATÉ 16 SERIA PARA CONECTAR AO ARQUIVO .ENV NÃO FUNCIONOU AQUI
A PORT APARECE COMO UNDEFINED E NÃO CONECTA AO BANCO DE DADOS POR NÃO CONECTAR
AO ARQUIVO .ENV*/

module.exports = app;

//export default app
//export {app} - ESSA É A FORMA QUE FOI VISTA NA MENTORIA, MAS NÃO ESTÁ DANDO CERTO, PORQUE TEM OUTRAS CONFIGURAÇÕES COM O "REQUIRE"

//TESTE GLAUBER PARA VER SE FUNCIONOU O GITHUB - FUNCIONOU GLAUBER!