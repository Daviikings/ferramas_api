"use strict";

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Iniciar sesión
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Credenciales'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 token:
 *                   type: string
 *       400:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 msj:
 *                   type: string
 *
 * /api/verificar:
 *   post:
 *     summary: Verificar token
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token válido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *       401:
 *         description: Token inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 msj:
 *                   type: string
 *
 * components:
 *   schemas:
 *     Credenciales:
 *       type: object
 *       required:
 *         - correo
 *         - password
 *       properties:
 *         correo:
 *           type: string
 *         password:
 *           type: string
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
// Obtenemos el metodo Router de express
var _require = require('express'),
  Router = _require.Router; // REQUERIMOS EL MODULO DE RUTAS DE EXPRESS
//CONTROLADORES
var _require2 = require('./../controllers/login.controller'),
  login = _require2.login,
  verificar = _require2.verificar;
var _require3 = require('./../validators/login.validators'),
  validadorLogin = _require3.validadorLogin;
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
var _require4 = require('./../middlewares/auth'),
  TokenTrue = _require4.TokenTrue;
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
var route = Router();
//verifica si existe usario y crea token
route.post('/login', [validadorLogin], login);
//verifica si el token es valido
route.post('/verificar', TokenTrue, verificar);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = route;