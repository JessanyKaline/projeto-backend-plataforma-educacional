
const userRoutes = (app) => {
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

export default userRoutes