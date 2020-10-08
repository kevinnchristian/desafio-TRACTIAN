const { Schema, model } = require('mongoose');

const CompanySchema = new Schema(
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
        type: Schema.Types.ObjectId, 
        ref: 'Company',
        require: true,
      },
    ],
    users: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'Company',
        require: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Company = model('Company', CompanySchema);
module.exports = Company;