const [ Company, Unit, Active ] = require('../models/Company');

const ActiveController = {
  index: async (req, res) => {
    try {
      const { unit_id } = req.params;
      const unit = await Unit.findOne({ "_id": unit_id })
      .then(unit => {
        return res.status(200).json(unit.actives);
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

  show: async (req, res) => {
    try {
      const { active_id } = req.params;
      const active = await Active.findOne({ "_id": active_id })
      .then(active => {
        return res.status(200).json(active);
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
      const { 
        image,
        active_name,
        responsible,
        description,
        model,
        status,
        healthscore,
        value,
        resaleValue,
        monthPurchase,
        yearPurchase,
        lifespan 
      } = req.body;
      const company = await Company.findOne({ "_id": company_id });
      const newActive = await Active.create({ 
        image,
        active_name,
        responsible,
        description,
        model,
        status,
        healthscore,
        value,
        resaleValue,
        monthPurchase,
        yearPurchase,
        lifespan 
      });
      
      company.units.actives.push(newActive._id);
      await company.save()
      .then(user => {
        return res.status(201).json(newActive);
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
      const { active_id } = req.params;
      const {  
        image,
        active_name,
        responsible,
        description,
        model,
        status,
        healthscore,
        value,
        resaleValue,
        monthPurchase,
        yearPurchase,
        lifespan 
      } = req.body;
      const updateActive = await Active.findOneAndUpdate({ "_id": active_id },
      { 
        image,
        active_name,
        responsible,
        description,
        model,
        status,
        healthscore,
        value,
        resaleValue,
        monthPurchase,
        yearPurchase,
        lifespan 
      }, { new: true })
      .then(result => {
        return res.status(201).json(result);
      })
      .catch(err => {
        if (err) {
          return res.status(400).json({
              msg: "User not found",
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
      const { company_id, active_id } = req.params;
      const company = await Company.findOne({ "_id": company_id })
      const deleteActive = await Active.findByIdAndRemove({ "_id": active_id });

      company.units.actives.remove({ "_id": active_id });
      await company.save()
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
      return res.status(400).json({ msg: "Error in delete" });
    }
  }

};

module.exports = ActiveController;