const express = require('express');
const router = express.Router();

const companyController = require('../controllers/companyController');
const userController = require('../controllers/userController');
const activeController = require('../controllers/activeController');

// Rotas empresas de forma geral
router.get('/empresa', companyController.index);
router.post('/empresa', companyController.create);
router.put('/empresa/:id', companyController.update);
router.delete('/empresa/:id', companyController.destroy);

// Rotas ativos
router.get('/empresa/:id/ativos', activeController.show);
router.post('/empresa/:id/ativos', activeController.create);
router.put('/empresa/:id/ativos', activeController.update);
router.delete('/empresa/:id/ativos', activeController.destroy);

// Rotas usuários
router.get('/empresa/:id/usuarios', userController.show);
router.post('/empresa/:id/usuarios', userController.create);
router.put('/empresa/:id/usuarios', userController.update);
router.delete('/empresa/:id/usuarios', userController.destroy);


module.exports = router;
