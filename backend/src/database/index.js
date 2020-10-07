const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/desafios';

function connectMongoDB() {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectMongoDB;

