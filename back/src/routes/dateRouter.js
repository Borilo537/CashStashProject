
const { Router } = require('express');

const router = Router();


const { 
   addDate,
} = require('../controllers/addController')


router.post('/date/add', addDate);


module.exports = router;