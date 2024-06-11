"use strict";

/**
 * @swagger
 * /api/divisas:
 *   get:
 *     summary: Obtener información de divisas
 *     responses:
 *       200:
 *         description: Información de divisas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Divisa'
 *
 * components:
 *   schemas:
 *     Divisa:
 *       type: object
 *       properties:
 *         codigo_divisa:
 *           type: string
 *         nombre_divisa:
 *           type: string
 *         valor:
 *           type: number
 *         fecha_actual:
 *           type: string
 *           format: date
 */
// Obtenemos el metodo Router de express
var _require = require('express'),
  Router = _require.Router;
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
var _require2 = require('../middlewares/auth'),
  TokenTrue = _require2.TokenTrue;
//CONTROLADORES
var _require3 = require('../controllers/divisa.controllers'),
  obtenerDivisa = _require3.obtenerDivisa;
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
var router = Router();
//RUTAS DE Marca
router.get('/', TokenTrue, obtenerDivisa);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;