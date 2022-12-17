require('dotenv').config() 
const app = require("./src/app.js")
const PORT = process.env.PORT; 

app.get('/',function(req, res){
    res.send({
        mensage: 'primeiro get'
    })
})

app.listen(PORT,() => console.log (`Servidor rodando na porta ${PORT} `));