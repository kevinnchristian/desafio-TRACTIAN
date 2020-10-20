const Company = require('../models/Company');
const [ Active, Unit ] = require('../models/Unit');

const UnitController = {
  show: async (req, res) => {
    try {
      const { unit_id } = req.params;
      const unit = await Unit.findOne({ "_id": unit_id })
      .then(unit => {
        return res.status(200).json(unit);
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
        msg: "Not registration" 
      });
    }
  },

  create: async (req, res) => {
    try {
      const { company_id } = req.params;
      const { city } = req.body;
      const company = await Company.findOne({ "_id": company_id });
      const newUnit = await Unit.create({ city });
      
      company.units.push(newUnit._id);
      await company.save()
      .then(unit => {
        return res.status(201).json(newUnit);
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
      }) && console.log(err);
    } 
  },

  update: async (req, res) => {
    try {
      const { unit_id } = req.params;
      const { city } = req.body;
      const updateUnit = await Unit.findOneAndUpdate({ "_id": unit_id },
      { city }, { new: true })
      .then(unit => {
        return res.status(201).json(unit);
      })
      .catch(err => {
        if (err) {
          return res.status(400).json({
              msg: "Unit not found",
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
    try {
      const { company_id, unit_id } = req.params;
      const company = await Company.findOne({ "_id": company_id })
      const deleteUnit = await Unit.findByIdAndRemove({ "_id": unit_id });

      company.units.remove({ "_id": unit_id });
      await company.save()
      .then(result => {
        return res.sendStatus(204);
      })
      .catch(err => {
        if (err) {
          return res.status(400).json({
              msg: "Unit not found",
            }) && 
            console.log(`⚠️  Error: ${err.name} - 💬 Message: ${err.messageFormat}`);
        }
      });
    } catch (err) {
      return res.status(400).json({ msg: "Error in delete" });
    }
  }

};

module.exports = UnitController;