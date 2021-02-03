const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  goldMember: {
    type: Boolean,
    default: false,
  },
});

const Customer = mongoose.model('Customer', customerSchema);
exports.Customer = Customer;
