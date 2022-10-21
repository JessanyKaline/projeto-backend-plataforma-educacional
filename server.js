import app from "./src/app.js"
import userRoutes from "./src/routes/userRoutes.js"
const port = 8080

userRoutes(app)

app.listen(port, ()=> console.log(`Servidor iniciado na porta ${port}`))

app.get('/', (req, res) =>{
    res.send("hello")
})

