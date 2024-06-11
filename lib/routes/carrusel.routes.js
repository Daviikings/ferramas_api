"use strict";

/**
 * @swagger
 * /api/carrusel:
 *   get:
 *     summary: Obtener todas las imágenes del carrusel
 *     responses:
 *       200:
 *         description: Imágenes del carrusel obtenidas exitosamente
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
 *                     $ref: '#/components/schemas/Carrusel'
 *   post:
 *     summary: Agregar una nueva imagen al carrusel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaImagenCarrusel'
 *     responses:
 *       200:
 *         description: Imagen del carrusel agregada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *
 * /api/carrusel/{id}:
 *   get:
 *     summary: Obtener una imagen del carrusel por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Imagen del carrusel obtenida exitosamente
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
 *                     $ref: '#/components/schemas/Carrusel'
 *   put:
 *     summary: Actualizar una imagen del carrusel
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
 *             $ref: '#/components/schemas/ActualizarImagenCarrusel'
 *     responses:
 *       200:
 *         description: Imagen del carrusel actualizada exitosamente
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
 *     summary: Eliminar una imagen del carrusel
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Imagen del carrusel eliminada exitosamente
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
 *     Carrusel:
 *       type: object
 *       properties:
 *         id_caru:
 *           type: integer
 *         nombre:
 *           type: string
 *         url_imagen:
 *           type: string
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *         estado:
 *           type: string
 *
 *     NuevaImagenCarrusel:
 *       type: object
 *       required:
 *         - nombre
 *         - url_imagen
 *         - estado
 *       properties:
 *         nombre:
 *           type: string
 *         url_imagen:
 *           type: string
 *         estado:
 *           type: boolean
 *
 *     ActualizarImagenCarrusel:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         url_imagen:
 *           type: string
 *         estado:
 *           type: boolean
 */
// Obtenemos el metodo Router de express
var _require = require('express'),
  Router = _require.Router;
//CONTROLADORES
var _require2 = require('../controllers/carrusel.controllers'),
  obtenerCaruselTodos = _require2.obtenerCaruselTodos,
  obtenerCarusel = _require2.obtenerCarusel,
  agregarCarusel = _require2.agregarCarusel,
  editarCarusel = _require2.editarCarusel,
  eliminarCarusel = _require2.eliminarCarusel;
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
var _require3 = require('../middlewares/auth'),
  TokenTrue = _require3.TokenTrue;
var _require4 = require('../validators/carrusel.validators'),
  validadorCarrusel = _require4.validadorCarrusel;
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
var router = Router();
//RUTAS DE PAISES
router.get('/', obtenerCaruselTodos);
router.post('/', TokenTrue, [validadorCarrusel], agregarCarusel);
router.get('/:id', obtenerCarusel);
router.put('/:id', TokenTrue, editarCarusel);
router["delete"]('/:id', TokenTrue, eliminarCarusel);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;