require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');

const drinks = require('./src/backend/Drink/drinkRoutes');

mongoose
  .connect(`mongodb://localhost/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.log('Could not connect to MongoDB'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Request-With, Authorization, Accept, Content-Type'
  );
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/drinks', drinks);

const port = process.env.DB_PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
