// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const {
    login,
    idCheck
} = require('../controllers/loginController');

router.post('/login', login);
router.get('/idCheck', idCheck);

module.exports = router;