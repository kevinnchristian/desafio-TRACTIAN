const express = require('express');
const router = express.Router();

const companyController = require('../controllers/companyController');
const userController = require('../controllers/userController');
// const activeController = require('../controllers/activeController');

// Rotas empresas de forma geral
router.get('/empresa', companyController.index);
router.post('/empresa', companyController.create);
router.put('/empresa/:company_id', companyController.update);
router.delete('/empresa/:company_id', companyController.destroy);

// Rotas ativos
// router.get('/empresa/:company_id/ativos', activeController.show);
// router.post('/empresa/:company_id/ativos', activeController.create);
// router.put('/empresa/:company_id/ativos', activeController.update);
// router.delete('/empresa/:company_id/ativos', activeController.destroy);

// Rotas usuários
router.get('/empresa/:company_id/usuarios', userController.index);
router.get('/empresa/:company_id/usuarios/:user_id', userController.show);
router.post('/empresa/:company_id/usuarios', userController.create);
router.put('/empresa/:company_id/usuarios/:user_id', userController.update);
router.delete('/empresa/:company_id/usuarios/:user_id', userController.destroy);


module.exports = router;
