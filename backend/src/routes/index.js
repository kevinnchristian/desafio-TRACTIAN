const express = require('express');
const router = express.Router();

const CompaniesController = require('../controllers/CompaniesController');
const AtivosController = require('../controllers/AtivosController');
const UsuariosController = require('../controllers/UsuariosController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Ta funcionando!!!');
});

// Rotas empresas de forma geral
router.get('/empresa', CompaniesController.index);
router.post('/empresa', CompaniesController.create);
router.put('/empresa/:id', CompaniesController.update);
router.delete('/empresa/:id', CompaniesController.destroy);

// Rotas ativos
router.get('/empresa/:id/ativos', AtivosController.index);
router.post('/empresa/:id/ativos', AtivosController.create);
router.put('/empresa/:id/ativos/:ativo_id', AtivosController.update);
router.delete('/empresa/:id/ativos/:ativo_id', AtivosController.destroy);

// Rotas usuários
router.get('/empresa/:id/usuarios', UsuariosController.index);
router.post('/empresa/:id/usuarios', UsuariosController.create);
router.put('/empresa/:id/usuarios/:usuario_id', UsuariosController.update);
router.delete('/empresa/:id/usuarios/:usuario_id', UsuariosController.destroy);


module.exports = router;
