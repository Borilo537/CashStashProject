
const { Router } = require('express');

const router = Router();


const { 
   addDate,
} = require('../controllers/dateController')


router.post('/date/add', addDate);


module.exports = router;