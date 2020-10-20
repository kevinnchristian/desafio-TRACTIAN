const Company = require('../models/Company');

const CompanyController = {
  index: async (_req, res) => {
    try {
      const companies = await Company.find();

      return res.status(200).json(companies);
    } catch (err) {
      return res.status(400).json({ 
        error: true,
        msg: "Not registration" 
      });
    }
  },

  create: async (req, res) => {
    const { company_name, maintenanceManager } = req.body;

    try {
      const newCompany = await Company.create({
        company_name,
        maintenanceManager,
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
    } catch (err) {
      return res.status(400).json({ 
        error: true,
        msg: "Error in create" 
      });
    } 
  },

  update: async (req, res) => {
    const { company_id } = req.params;
    const { company_name, maintenanceManager } = req.body;
    
    try {
      const updateCompany = await Company.findByIdAndUpdate(company_id, {
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
    } catch (err) {
      return res.status(400).json({ 
        error: true,
        msg: "Error in update" 
      });
    }
  },

  destroy: async (req, res) => {
    const { company_id } = req.params;

    try {
      const deleteCompany = await Company.findByIdAndDelete(company_id)
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
    } catch (err) {
      return res.status(400).json({ 
        error: true,
        msg: "Error in delete" 
      });
    }
  }

};

module.exports = CompanyController;