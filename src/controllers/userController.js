const Company = require('../models/Company');
const User = require('../models/User');

const UserController = {
  show: async (req, res) => {
    try {
      const { user_id } = req.params;
      const user = await User.findOne({ "_id": user_id })
      .then(user => {
        return res.status(200).json(user);
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
      const { user_name, registration, office } = req.body;
      const company = await Company.findOne({ "_id": company_id });
      const newUser = await User.create({ user_name, registration, office });
      
      company.users.push(newUser._id);
      await company.save()
      .then(user => {
        return res.status(201).json(newUser);
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
      const { user_id } = req.params;
      const { user_name, registration, office } = req.body;
      const updateUser = await User.findOneAndUpdate({ "_id": user_id }, {
        user_name, 
        registration, 
        office
      }, { new: true })
      .then(user => {
        return res.status(201).json(user);
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
      const { company_id, user_id } = req.params;
      const company = await Company.findOne({ "_id": company_id });
      const deleteUser = await User.findByIdAndRemove({ "_id": user_id });

      company.users.remove({ "_id": user_id });
      await company.save()
      .then(result => {
        return res.sendStatus(204);
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
      return res.status(400).json({ msg: "Error in delete" });
    }
  }

};

module.exports = UserController;