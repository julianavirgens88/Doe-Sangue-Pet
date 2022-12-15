const router = require('express').Router();
const controller = require("../controller/cachorroController");
const { checkAuth } = require("../middlewares/auth");

router.get('/cachorro/:id',checkAuth, controller.buscarCachorroId)
router.get('/cachorro', checkAuth, controller.buscarTodosCachorros)
router.post('/cachorro', checkAuth, controller.criarCadastroCachorro)
router.delete('/cachorro/:id', checkAuth, controller.deletarCadastroCachorro)
router.patch('/cachorro/:id', checkAuth, controller.atualizarCadastroCachorro)

module.exports = router