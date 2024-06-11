"use strict";

/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Obtener todas las categorías
 *     responses:
 *       200:
 *         description: Categorías obtenidas exitosamente
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
 *                     $ref: '#/components/schemas/Categoria'
 *   post:
 *     summary: Agregar una nueva categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaCategoria'
 *     responses:
 *       200:
 *         description: Categoría agregada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *
 * /api/categorias/{id}:
 *   get:
 *     summary: Obtener una categoría por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoría obtenida exitosamente
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
 *                     $ref: '#/components/schemas/Categoria'
 *   put:
 *     summary: Actualizar una categoría
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
 *             $ref: '#/components/schemas/ActualizarCategoria'
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
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
 *     summary: Eliminar una categoría
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
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
 * /api/categorias/nombre/{name}:
 *   get:
 *     summary: Obtener categorías por nombre
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Categorías obtenidas exitosamente
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
 *                     $ref: '#/components/schemas/Categoria'
 *
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       properties:
 *         id_cat:
 *           type: integer
 *         nombre:
 *           type: string
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *         estado:
 *           type: string
 *
 *     NuevaCategoria:
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
 *     ActualizarCategoria:
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
var _require2 = require('../controllers/categorias.controllers'),
  obtenerCategorias = _require2.obtenerCategorias,
  agregarCategoria = _require2.agregarCategoria,
  obtenerCategoria = _require2.obtenerCategoria,
  editarCategoria = _require2.editarCategoria,
  eliminarCategoria = _require2.eliminarCategoria,
  obtenerCategoriaNombre = _require2.obtenerCategoriaNombre;

//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
var _require3 = require('../middlewares/auth'),
  TokenTrue = _require3.TokenTrue;
var _require4 = require('../validators/categorias.validators'),
  validadorCategorias = _require4.validadorCategorias;
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
var router = Router();
//RUTAS DE CATEGORIAS
router.get('/', obtenerCategorias);
router.post('/', TokenTrue, [validadorCategorias], agregarCategoria);
router.get('/nombre/:name', obtenerCategoriaNombre);
router.get('/:id', obtenerCategoria);
router.put('/:id', TokenTrue, editarCategoria);
router["delete"]('/:id', TokenTrue, eliminarCategoria);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;