"use strict";

/**
 * @swagger
 * /api/subcategorias:
 *   get:
 *     summary: Obtener todas las subcategorías
 *     responses:
 *       200:
 *         description: Subcategorías obtenidas exitosamente
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
 *                     $ref: '#/components/schemas/Subcategoria'
 *   post:
 *     summary: Agregar una nueva subcategoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaSubcategoria'
 *     responses:
 *       200:
 *         description: Subcategoría agregada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *
 * /api/subcategorias/{id}:
 *   get:
 *     summary: Obtener una subcategoría por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Subcategoría obtenida exitosamente
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
 *                     $ref: '#/components/schemas/Subcategoria'
 *   put:
 *     summary: Actualizar una subcategoría
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
 *             $ref: '#/components/schemas/ActualizarSubcategoria'
 *     responses:
 *       200:
 *         description: Subcategoría actualizada exitosamente
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
 *     summary: Eliminar una subcategoría
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Subcategoría eliminada exitosamente
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
 * /api/subcategorias/nombre/{name}:
 *   get:
 *     summary: Obtener subcategorías por nombre
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subcategorías obtenidas exitosamente
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
 *                     $ref: '#/components/schemas/Subcategoria'
 *
 * components:
 *   schemas:
 *     Subcategoria:
 *       type: object
 *       properties:
 *         id_scat:
 *           type: integer
 *         nombre:
 *           type: string
 *         estado:
 *           type: string
 *
 *     NuevaSubcategoria:
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
 *     ActualizarSubcategoria:
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
var _require2 = require('../controllers/subcategoria.controllers'),
  obtenerSubCategorias = _require2.obtenerSubCategorias,
  agregarSubCategoria = _require2.agregarSubCategoria,
  obtenerSubCategoria = _require2.obtenerSubCategoria,
  obtenerSubCategoriaNombre = _require2.obtenerSubCategoriaNombre,
  editarSubCategoria = _require2.editarSubCategoria,
  eliminarSubCategoria = _require2.eliminarSubCategoria;
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
var _require3 = require('../middlewares/auth'),
  TokenTrue = _require3.TokenTrue;
var _require4 = require('../validators/subcategoria.validators'),
  validadorSubCategoria = _require4.validadorSubCategoria;
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
var router = Router();
//RUTAS DE SubCategoria
router.get('/', obtenerSubCategorias);
router.post('/', TokenTrue, [validadorSubCategoria], agregarSubCategoria);
router.get('/:id', obtenerSubCategoria);
router.get('/nombre/:name', obtenerSubCategoriaNombre);
router.put('/:id', TokenTrue, editarSubCategoria);
router["delete"]('/:id', TokenTrue, eliminarSubCategoria);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;