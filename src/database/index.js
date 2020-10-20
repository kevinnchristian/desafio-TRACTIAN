const mongoose = require("mongoose");

const url = process.env.MONGO_URI || 'mongodb://localhost:27017/desafio';

mongoose.connect(url, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(connect => {
  console.log("🎲 Successfully connected to MongoDB");
}).catch(err => {
  console.log(err);
})

module.exports = mongoose;

