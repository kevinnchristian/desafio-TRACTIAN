const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');

const router = express.Router();

const companyController = require('../controllers/companyController');
const unitController = require('../controllers/unitController');
const activeController = require('../controllers/activeController');
const userController = require('../controllers/userController');

// Rotas empresas de forma geral
router.get('/companies', companyController.index);
router.post('/companies', companyController.create);
router.put('/companies/:company_id', companyController.update);
router.delete('/companies/:company_id', companyController.destroy);

// Rotas unidades
router.get('/companies/unit/:unit_id', unitController.show);
router.post('/companies/:company_id/unit', unitController.create);
router.put('/companies/unit/:unit_id', unitController.update);
router.delete('/companies/:company_id/unit/:unit_id', unitController.destroy);

// Rotas ativos
router.get('/companies/unit/active/:active_id', activeController.show);
router.post('/companies/unit/:unit_id/active', multer(multerConfig).single('image'), activeController.create);
router.put('/companies/active/:active_id', multer(multerConfig).single('image'), activeController.update);
router.delete('/companies/unit/:unit_id/active/:active_id', activeController.destroy);

// Rotas usuários
router.get('/companies/user/:user_id', userController.show);
router.post('/companies/:company_id/user', userController.create);
router.put('/companies/user/:user_id', userController.update);
router.delete('/companies/:company_id/user/:user_id', userController.destroy);

module.exports = router;
