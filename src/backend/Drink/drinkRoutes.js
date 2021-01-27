const express = require('express');
const router = express.Router();

const drinkCtrl = require('./drinkController');

router.get('/', drinkCtrl.getAllDrinks);
router.post('/', drinkCtrl.createNewDrink);

module.exports = router;
