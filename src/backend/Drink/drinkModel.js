const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Drink = mongoose.model('Drink', drinkSchema);

exports.Drink = Drink;
