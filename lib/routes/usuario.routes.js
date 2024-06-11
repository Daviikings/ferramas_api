"use strict";

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Usuarios obtenidos exitosamente
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
 *                     $ref: '#/components/schemas/Usuario'
 *   post:
 *     summary: Agregar un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevoUsuario'
 *     responses:
 *       200:
 *         description: Usuario agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msj:
 *                   type: string
 *                 usuario:
 *                   $ref: '#/components/schemas/Usuario'
 *
 * /api/usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Usuario'
 *   put:
 *     summary: Actualizar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActualizarUsuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msj:
 *                   type: string
 *   delete:
 *     summary: Eliminar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msj:
 *                   type: string
 *
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         rut:
 *           type: string
 *         direccion:
 *           type: string
 *         telefono:
 *           type: string
 *         correo_electronico:
 *           type: string
 *         id_rol:
 *           type: integer
 *         activo:
 *           type: boolean
 *
 *     NuevoUsuario:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         password:
 *           type: string
 *         rut:
 *           type: string
 *         direccion:
 *           type: string
 *         telefono:
 *           type: string
 *         correo:
 *           type: string
 *         rol:
 *           type: integer
 *         activo:
 *           type: boolean
 *
 *     ActualizarUsuario:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         rut:
 *           type: string
 *         direccion:
 *           type: string
 *         telefono:
 *           type: string
 *         correo:
 *           type: string
 *         rol:
 *           type: integer
 *         activo:
 *           type: boolean
 */
// Obtenemos el metodo Router de express
var _require = require('express'),
  Router = _require.Router;
//CONTROLADORES
var _require2 = require('./../controllers/usuario.controller'),
  agregarUsuario = _require2.agregarUsuario,
  editarUsuario = _require2.editarUsuario,
  eliminarUsuario = _require2.eliminarUsuario,
  obtenerTodo = _require2.obtenerTodo,
  obtenerUnoSolo = _require2.obtenerUnoSolo;
var _require3 = require('./../middlewares/auth'),
  TokenTrue = _require3.TokenTrue;
var _require4 = require('./../validators/usuario.validators'),
  validadorUsuario = _require4.validadorUsuario;
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
var router = Router();
//  METODOS DE NUESTRA RUTA
router.get('/', TokenTrue, obtenerTodo);
router.get('/:id', TokenTrue, obtenerUnoSolo);
router.post('/', [validadorUsuario], agregarUsuario);
router.put('/:id', TokenTrue, editarUsuario);
router["delete"]('/:id', TokenTrue, eliminarUsuario);
//  EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;