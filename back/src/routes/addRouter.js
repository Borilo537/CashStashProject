
const { Router } = require('express');

const router = Router();


const { 
   updateGastos,
   selectGastos
} = require('../controllers/addController')


router.post('/gastos/update', updateGastos);
router.get('/gastos/select', selectGastos);

module.exports = router;