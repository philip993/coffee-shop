const express = require('express');
const router = express.Router();

const customerCtrl = require('./customerController');

router.get('/', customerCtrl.getAllCustomers);
router.post('/', customerCtrl.createNewCustomer);

module.exports = router;
