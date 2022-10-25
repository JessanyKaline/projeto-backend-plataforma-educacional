require('dotenv').config(); //Mudei com a tutoria do Everton, tive que acrescentar aqui pra rodar na minha máquina



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

