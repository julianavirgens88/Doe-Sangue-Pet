const router = require('express').Router();
const controller = require("../controller/cachorroController");

router.get('/cachorro/:id', controller.buscarCachorroId)
router.get('/cachorro', controller.buscarTodosCachorros)
router.post('/cachorro', controller.criarCadastroCachorro)
router.delete('/cachorro/:id', controller.deletarCadastroCachorro)
router.patch('/cachorro/:id', controller.atualizarCadastroCachorro)

module.exports = router