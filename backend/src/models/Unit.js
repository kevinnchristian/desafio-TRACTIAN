const { Schema, model } = require('mongoose');

const UnitSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  actives: [
    { 
      type: Schema.Types.ObjectId, 
      ref: 'Unit',
      require: true,
    },
  ],
},
{
  timestamps: true,
});


const Unit = model('Unit', UnitSchema);
module.exports = Unit;
  