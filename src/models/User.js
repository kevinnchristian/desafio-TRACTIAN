const { Schema, model } = require('mongoose');

const User = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  registration: {
    type: Number,
    required: true,
  },
  office: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
}
);

module.exports = model('User', User);