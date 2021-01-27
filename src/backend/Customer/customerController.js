const { Customer } = require('./customerModel');

exports.getAllCustomers = (req, res) => {
  Customer.find({}).then((customers) => {
    res
      .status(200)
      .json({
        customers,
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          msg: 'System Error! Cannot load all Customer',
        });
      });
  });
};

exports.createNewCustomer = (req, res) => {
  const customer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  customer
    .save()
    .then((customer) => {
      res.status(201).json({
        customer,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error! Cannot create new Customer!',
      });
    });
};
