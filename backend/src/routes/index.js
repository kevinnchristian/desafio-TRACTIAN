const express = require('express');
const router = express.Router();

const CompaniesController = require('../controllers/CompaniesController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Ta funcionando!!!');
});

router.get('/empresa', CompaniesController.index);

module.exports = router;
