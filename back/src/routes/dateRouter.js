
const { Router } = require('express');

const router = Router();


const { 
   addDate,
   selectDate,
   selectExpiredDate
} = require('../controllers/dateController')


router.post('/date/add', addDate);
router.get('/date/select', selectDate);
router.get('/date/selectExpired', selectExpiredDate);


module.exports = router;