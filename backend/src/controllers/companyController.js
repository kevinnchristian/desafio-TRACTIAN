const Company = require('../models/Company');

const CompanyController = {
  index: async (_req, res) => {
    try {
      const companies = await Company.find();
      return res.status(200).json(companies);

    } catch (err) {
      return res.status(400).json({ msg: "Not registration" });

    }
  },

  create: async (req, res) => {
    const { company_name, maintenanceManager } = req.body;

    const newCompany = await Company.create({
        company_name,
        maintenanceManager,
        units: [],
        users: [],
      }).then(result => {
        return res.status(201).json(result);
      }).catch(err => {
        if (err) {
          return res.status(400).json({
              msg: "Request error",
            }) && 
            console.log(`⚠️  Error: ${err.name} - 💬 Message: ${err.messageFormat}`);
        }
      })

  },

  update: async (req, res) => {
    const { id } = req.params;
    const { company_name, maintenanceManager } = req.body;
    
    const updateCompany = await Company.findByIdAndUpdate(id, {
      company_name,
      maintenanceManager,
    }, { new: true })
    .then(result => {
      return res.status(201).json(result);
    })
    .catch(err => {
      if (err) {
        return res.status(400).json({
            msg: "Company not found",
          }) && 
          console.log(`⚠️  Error: ${err.name} - 💬 Message: ${err.messageFormat}`);
      }
    });

  },

  destroy: async (req, res) => {
    const { id } = req.params;

    const deleteCompany = await Company.findByIdAndDelete(id)
    .then(result => {
      return res.sendStatus(204);
    })
    .catch(err => {
      if (err) {
        return res.status(400).json({
            msg: "Company not found",
          }) && 
          console.log(`⚠️  Error: ${err.name} - 💬 Message: ${err.messageFormat}`);
      }
    });

  },

};

module.exports = CompanyController;