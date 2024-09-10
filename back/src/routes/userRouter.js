
const { Router } = require('express');

const router = Router();

const { 
    storeUser,
    userLimit,
    userGasto
} = require('../controllers/userController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.post('/user/create', storeUser);
router.post('/user/createLimit', userLimit);
router.post('/user/createGasto', userGasto);
// router.put('/user/:id', updateUser);
// router.delete('/user/:id', deleteUser);

module.exports = router;