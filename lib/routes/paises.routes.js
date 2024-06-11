"use strict";

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Successful response
 */
// Obtenemos el metodo Router de express
var _require = require('express'),
  Router = _require.Router;
//CONTROLADORES
var _require2 = require('../controllers/paises.controllers'),
  obtenerPaises = _require2.obtenerPaises,
  agregarPais = _require2.agregarPais,
  obtenerPais = _require2.obtenerPais,
  obtenerPaisNombre = _require2.obtenerPaisNombre,
  editarPais = _require2.editarPais,
  eliminarPais = _require2.eliminarPais;
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
var _require3 = require('../middlewares/auth'),
  TokenTrue = _require3.TokenTrue;
var _require4 = require('../validators/paises.validators'),
  validadorPaises = _require4.validadorPaises;
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
var router = Router();
//RUTAS DE PAISES
router.get('/', obtenerPaises);
router.post('/', TokenTrue, [validadorPaises], agregarPais);
router.get('/:id', obtenerPais);
router.get('/nombre/:name', obtenerPaisNombre);
router.put('/:id', TokenTrue, editarPais);
router["delete"]('/:id', TokenTrue, eliminarPais);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;