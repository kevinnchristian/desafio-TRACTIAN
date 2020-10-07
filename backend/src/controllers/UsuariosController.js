const Companies = require('../models/Companies');

const UsuariosController = {
  index: async (req, res) => {
    return res.status(200).json({ "index": "OK!!!" });
  },

  create: async (req, res) => {
    return res.status(201).json({ "create": "OK!!!" });
  },

  update: async (req, res) => {
    return res.status(200).json({ "update": "OK!!!" });
  },

  destroy: async (req, res) => {
    return res.status(204).json({ "destroy": "OK!!!" });
  }
};

module.exports = UsuariosController;