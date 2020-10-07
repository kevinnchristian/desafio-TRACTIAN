const { Schema, model } = require('mongoose');

const Companies = new Schema(
  {
    companie_name: {
      type: String,
      required: true,
    },
    maintenanceManager: {
      type: String,
      required: true,
    },
    units: [],
    users: [],
  },
  {
    timestamps: true,
  }
);

module.exports = model('Companies', Companies);