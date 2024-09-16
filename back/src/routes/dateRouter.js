
const { Router } = require('express');

const router = Router();


const { 
   addDate,
   selectDate
} = require('../controllers/dateController')


router.post('/date/add', addDate);
router.get('/date/select', selectDate);


module.exports = router;