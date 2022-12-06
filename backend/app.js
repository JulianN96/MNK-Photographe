const express = require("express")
const app = express()
const mongoose = require("mongoose")
const productRoutes = require("./routes/products")


mongoose.connect('mongodb+srv://admin:qfCABA5vsDUnkJdU@mariekrillowphotography.vvfq2.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!')
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader("Content-Type", "application/json")
  next();
});


app.use("/api/products", productRoutes)



module.exports = app