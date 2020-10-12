const { Schema, model } = require('mongoose');

const Active = new Schema({
  image: {
    type: String,
    required: true,
  },
  active_name: {
    type: String,
    required: true,
  },
  responsible: {
    _id: {
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true,
    },
    user_name: {
      type: String,
    },
  },
  description: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  healthscore: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  resaleValue: {
    type: Number,
    required: true,
  },
  monthPurchase: {
    type: Number,
    required: true,
  },
  yearPurchase: {
    type: Number,
    required: true,
  },
  lifespan: {
    type: Number,
    required: true,
  },
},
{
  timestamps: true,
}
);

const Unit = new Schema({ 
  city: {
    type: String,
    required: true,
  },
  actives: [
    { 
      _id: {
        type: Schema.Types.ObjectId, 
        ref: 'Company', 
        required: true,
      },
      active_name: {
        type: String,
      },
      responsible: {
        _id: {
          type: Schema.Types.ObjectId, 
          ref: 'User', 
          required: true,
        },
        user_name: {
          type: String,
        },
      },
    },
  ],
},
{
  timestamps: true,
});

module.exports = [
  model('Active', Active),
  model('Unit', Unit)
];