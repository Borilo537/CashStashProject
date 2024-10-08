
const { Router } = require('express');

const router = Router();

const { 
    storeUser,
    createLimit,
    userGasto
} = require('../controllers/userController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.post('/user/create', storeUser);
router.post('/user/createLimit', createLimit);
router.post('/user/createGasto', userGasto);


module.exports = router;