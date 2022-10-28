//require('dotenv-safe').config(); //Mudei com a tutoria do Everton, tive que acrescentar aqui pra rodar na minha máquina

//JESSANY ------>>>> Eu comentei acima o dotenv, porque a Paula fala sobre ele no final da aula... Eu inseri ja no app.js. VERIFICA SE NA SUA MAQUINA VAI FUNCIONAR DESSA FORMA.


const app = require('./src/app')
//const PORT = 8080;
const PORT = process.env.PORT;



//userRoutes(app)

app.listen(PORT, ()=> {
    console.log(`Servidor iniciado na porta ${PORT}`)
})

/*app.get('/', (req, res) =>{
    res.send("hello")
})*/

