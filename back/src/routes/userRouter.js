
const { Router } = require('express');

const router = Router();

const {
    storeUser,
    createLimit,
    createGasto,
    accountInfo,
    alterName,
    alterPass
} = require('../controllers/userController')

router.post('/user/create', storeUser);
router.post('/user/createLimit', createLimit);
router.post('/user/createGasto', createGasto);
router.get('/user/accountInfo', accountInfo);
router.post('/user/alterName', alterName);
router.post('/user/alterPass', alterPass);


module.exports = router;