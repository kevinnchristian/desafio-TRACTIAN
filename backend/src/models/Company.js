const { Schema, model } = require('mongoose');

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
          required: true,
        }
      },
    ],
    users: [
      { 
        _id: {
          type: Schema.Types.ObjectId, 
          ref: 'Company', 
          required: true,
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);


module.exports = model('Company', Company);
