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
      require: true,
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
  location: {
    type: String,
    required: true,
  },
  actives: [
    { 
      _id: {
        type: Schema.Types.ObjectId, 
        ref: 'Company', 
        require: true,
      },
      active_name: {
        type: String,
      },
      responsible: {
        _id: {
          type: Schema.Types.ObjectId, 
          ref: 'User', 
          require: true,
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

const Company = new Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    maintenanceManager: {
      type: String,
      required: true,
    },
    units: [
      { 
        _id: {
          type: Schema.Types.ObjectId, 
          ref: 'Company', 
          require: true,
        }
      },
    ],
    users: [
      { 
        _id: {
          type: Schema.Types.ObjectId, 
          ref: 'Company', 
          require: true,
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);


module.exports = [
  model('Company', Company),
  model('Unit', Unit),
  model('Active', Active),
  model('User', User)
]