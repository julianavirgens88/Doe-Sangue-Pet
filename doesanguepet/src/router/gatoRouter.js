const router = require('express').Router()
const controller = require("../controller/GatoController")

router.get("/gato/:id", controller.buscarGatoId)
router.get("/gato", controller.buscarTodosGatos)
router.post("/gato", controller.criarCadastroGato)
router.delete("/gato/:id", controller.deletarCadastroGato)
router.patch("/gato/:id", controller.atualizarCadastroGato)

module.exports = router