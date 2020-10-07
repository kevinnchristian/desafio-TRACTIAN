const Companies = require('../models/Companies');

const CompaniesController = {
  index: async (req, res) => {
    const companies = await Companies.find();
    return res.status(200).json(companies);
  },

  create: async (req, res) => {
    const { companie_name, maintenanceManager, units, users } = req.body;

    const newCompany = await Companies.create({
      companie_name,
      maintenanceManager,
      units,
      users,
    });

    return res.status(201).json(newCompany);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { companie_name, maintenanceManager } = req.body;
    
    const updateCompany = await Companies.findByIdAndUpdate(id, {
      companie_name,
      maintenanceManager,
    }, { new: true }); 

    return res.status(201).json(updateCompany);
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    const deleteCompany = await Companies.findByIdAndDelete(id);

    return res.sendStatus(204);
  }
};

module.exports = CompaniesController;