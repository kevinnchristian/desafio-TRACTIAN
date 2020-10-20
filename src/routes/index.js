const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');

const router = express.Router();

const companyController = require('../controllers/companyController');
const unitController = require('../controllers/unitController');
const activeController = require('../controllers/activeController');
const userController = require('../controllers/userController');

// Rotas empresas de forma geral
router.get('/empresas', companyController.index);
router.post('/empresas', companyController.create);
router.put('/empresas/:company_id', companyController.update);
router.delete('/empresas/:company_id', companyController.destroy);

// Rotas unidades
router.get('/empresas/unidade/:unit_id', unitController.show);
router.post('/empresas/:company_id/unidade', unitController.create);
router.put('/empresas/unidade/:unit_id', unitController.update);
router.delete('/empresas/:company_id/unidade/:unit_id', unitController.destroy);

// Rotas ativos
router.get('/empresas/unidade/ativo/:active_id', activeController.show);
router.post('/empresas/unidade/:unit_id/ativo', multer(multerConfig).single('image'), activeController.create);
router.put('/empresas/ativo/:active_id', multer(multerConfig).single('image'), activeController.update);
router.delete('/empresas/unidade/:unit_id/ativo/:active_id', activeController.destroy);

// Rotas usuários
router.get('/empresas/usuario/:user_id', userController.show);
router.post('/empresas/:company_id/usuario', userController.create);
router.put('/empresas/usuario/:user_id', userController.update);
router.delete('/empresas/:company_id/usuario/:user_id', userController.destroy);

module.exports = router;
