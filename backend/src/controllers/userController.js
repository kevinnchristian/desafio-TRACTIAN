const Company = require('../models/Company');
const User = require('../models/User');

function clearInput(params1, params2, params3) {
  params1 = "";
  params2 = "";
  params3 = "";
};

const UserController = {
  show: async (req, res) => {
    const { id } = req.params;
    const { users } = await Company.findById(id);
  
    return res.status(200).json(users);
  },

  create: async (req, res) => {
    return res.status(201).json({ "create": "OK!!!" });
  },

  update: async (req, res) => {
    return res.status(201).json({ "update": "OK!!!" });
  },

  destroy: async (req, res) => {
    return res.status(204).json({ "destroy": "OK!!!" });
  },

};

module.exports = UserController;