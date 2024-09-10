
const { Router } = require('express');

const router = Router();

const { 
   updateLimit,
   selectLimit
} = require('../controllers/limitController')


router.post('/limit/update', updateLimit);

router.get('/limit/select', selectLimit);

module.exports = router;