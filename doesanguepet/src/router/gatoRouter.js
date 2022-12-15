const router = require('express').Router();
const controller = require("../controller/GatoController");
const { checkAuth } = require("../middlewares/auth");

router.get("/gato/:id", checkAuth, controller.buscarGatoId)
router.get("/gato", checkAuth, controller.buscarTodosGatos)
router.post("/gato", checkAuth,controller.criarCadastroGato)
router.delete("/gato/:id", checkAuth, controller.deletarCadastroGato)
router.patch("/gato/:id", checkAuth, controller.atualizarCadastroGato)

module.exports = router