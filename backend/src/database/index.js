const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URI || 'mongodb://localhost:27017/desafio';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(connect => {
  console.log("🎲 Successfully connected to MongoDB");
}).catch(err => {
  console.log(err);
})
mongoose.Promise = global.Promise;


module.exports = mongoose;

