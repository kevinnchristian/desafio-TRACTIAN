const Companies = require('../models/Companies')

const CompaniesController = {
  index: async (req, res) => {
    const companies = await Companies.find();
    console.log(companies);
    
    return res.status(200).json(companies);
  }
};

module.exports = CompaniesController;