"use strict";

/**
 * @swagger
 * /api/marcas:
 *   get:
 *     summary: Obtener todas las marcas
 *     responses:
 *       200:
 *         description: Marcas obtenidas exitosamente
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
 *                     $ref: '#/components/schemas/Marca'
 *   post:
 *     summary: Agregar una nueva marca
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaMarca'
 *     responses:
 *       200:
 *         description: Marca agregada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *
 * /api/marcas/{id}:
 *   get:
 *     summary: Obtener una marca por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Marca obtenida exitosamente
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
 *                     $ref: '#/components/schemas/Marca'
 *   put:
 *     summary: Actualizar una marca
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
 *             $ref: '#/components/schemas/ActualizarMarca'
 *     responses:
 *       200:
 *         description: Marca actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 msj:
 *                   type: string
 *   delete:
 *     summary: Eliminar una marca
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Marca eliminada exitosamente
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
 * /api/marcas/nombre/{name}:
 *   get:
 *     summary: Obtener marcas por nombre
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Marcas obtenidas exitosamente
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
 *                     $ref: '#/components/schemas/Marca'
 *
 * components:
 *   schemas:
 *     Marca:
 *       type: object
 *       properties:
 *         id_ma:
 *           type: integer
 *         nombre:
 *           type: string
 *         estado:
 *           type: string
 *
 *     NuevaMarca:
 *       type: object
 *       required:
 *         - nombre
 *         - estado
 *       properties:
 *         nombre:
 *           type: string
 *         estado:
 *           type: boolean
 *
 *     ActualizarMarca:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         estado:
 *           type: boolean
 */
// Obtenemos el metodo Router de express
var _require = require('express'),
  Router = _require.Router;
//CONTROLADORES
var _require2 = require('../controllers/marca.controllers'),
  obtenerMarcas = _require2.obtenerMarcas,
  agregarMarca = _require2.agregarMarca,
  obtenerMarca = _require2.obtenerMarca,
  obtenerMarcaNombre = _require2.obtenerMarcaNombre,
  editarMarca = _require2.editarMarca,
  eliminarMarca = _require2.eliminarMarca;
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
var _require3 = require('../middlewares/auth'),
  TokenTrue = _require3.TokenTrue;
var _require4 = require('../validators/marca.validators'),
  validadorMarca = _require4.validadorMarca;
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
var router = Router();
//RUTAS DE Marca
router.get('/', obtenerMarcas);
router.post('/', TokenTrue, [validadorMarca], agregarMarca);
router.get('/:id', obtenerMarca);
router.get('/nombre/:name', obtenerMarcaNombre);
router.put('/:id', TokenTrue, editarMarca);
router["delete"]('/:id', TokenTrue, eliminarMarca);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;