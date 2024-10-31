
const { Router } = require('express');

const router = Router();

const { 
    storeUser,
    createLimit,
    createGasto,
    accountInfo
} = require('../controllers/userController')

router.post('/user/create', storeUser);
router.post('/user/createLimit', createLimit);
router.post('/user/createGasto', createGasto);
router.get('/user/accountInfo', accountInfo);


module.exports = router;