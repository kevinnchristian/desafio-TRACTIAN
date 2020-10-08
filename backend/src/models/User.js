const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
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

const User = model('User', UserSchema);
module.exports = User;