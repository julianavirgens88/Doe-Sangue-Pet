require("dotenv").config()
const express = require("express")
const cors = require("cors")
const database = require("./config/mongoConnect")
const indexRouter = require("./routes/indexRoutes")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=> res.status(200).send("Seja bem-vindo!"))

database.connect()

app.use(indexRouter)

module.exports = app
