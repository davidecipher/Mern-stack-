const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors);

mongoose.connect(process.env.MONGO_URI).then(() => {
   console.log('Database Connected')   
}).then(() => {
   app.listen(port, () => {
      console.log(`Sever is running on Port: ${port}`);
   });
   
})
