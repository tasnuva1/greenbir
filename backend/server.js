const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');
const connectDB = require('./config/db');
const colors = require('colors');

dotenv.config();

// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname+'../../.env' });

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Hellow world');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `app is running in ${process.env.NODE_ENV} mode on port ${PORT}.`.underline
      .blue
  )
);
