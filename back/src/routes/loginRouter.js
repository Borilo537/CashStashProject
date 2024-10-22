// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const {
    login,
    idCheck
} = require('../controllers/loginController');

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Retorna todas as tarefas
 *     responses:
 *       200:
 *         description: Uma lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.post('/login', login);

/**
 * @swagger
 * /idCheck:
 *   get:
 *     summary: Retorna o valor do id
 *     responses:
 *       200:
 *         description: Uma lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/idCheck', idCheck);

module.exports = router;