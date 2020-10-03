const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function connectMongoDB() {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
