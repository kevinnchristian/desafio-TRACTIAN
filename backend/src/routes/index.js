const express = require('express');
const router = express.Router();

const companyController = require('../controllers/companyController');
const userController = require('../controllers/userController');
const unitController = require('../controllers/unitController');
const activeController = require('../controllers/activeController');

// Rotas empresas de forma geral
router.get('/empresa', companyController.index);
router.post('/empresa', companyController.create);
router.put('/empresa/:company_id', companyController.update);
router.delete('/empresa/:company_id', companyController.destroy);

// Rotas unidades
router.get('/empresa/:company_id/unidades', unitController.index);
router.get('/empresa/:company_id/unidades/:unit_id', unitController.show);
router.post('/empresa/:company_id/unidades', unitController.create);
router.put('/empresa/:company_id/unidades/:unit_id', unitController.update);
router.delete('/empresa/:company_id/unidades/:unit_id', unitController.destroy);

// Rotas ativos
router.get('/empresa/:company_id/unidades/:unit_id/ativos', activeController.index);
router.get('/empresa/:company_id/unidades/:unit_id/ativos/:active_id', activeController.show);
router.post('/empresa/:company_id/unidades/:unit_id/ativos', activeController.create);
router.put('/empresa/:company_id/unidades/:unit_id/ativos/:active_id', activeController.update);
router.delete('/empresa/:company_id/unidades/:unit_id/ativos/:active_id', activeController.destroy);

// Rotas usuários
router.get('/empresa/:company_id/usuarios', userController.index);
router.get('/empresa/:company_id/usuarios/:user_id', userController.show);
router.post('/empresa/:company_id/usuarios', userController.create);
router.put('/empresa/:company_id/usuarios/:user_id', userController.update);
router.delete('/empresa/:company_id/usuarios/:user_id', userController.destroy);


module.exports = router;
