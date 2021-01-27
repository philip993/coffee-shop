const { Drink } = require('./DrinkModel');

exports.getAllDrinks = (req, res) => {
  Drink.find({})
    .then((drinks) => {
      res.status(200).json({
        drinks,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error! Cannot load Drinks!',
      });
    });
};

exports.createNewDrink = (req, res) => {
  const drink = new Drink({
    name: req.body.name,
    price: req.body.price,
  });

  drink
    .save()
    .then((drink) => {
      console.log(drink);
      res.status(201).json({
        drink,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error! Cannot create new Drink!',
      });
    });
};
