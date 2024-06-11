/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtener todos los productos
 *     responses:
 *       200:
 *         description: Productos obtenidos exitosamente
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
 *                     $ref: '#/components/schemas/Producto'
 *   post:
 *     summary: Agregar un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevoProducto'
 *     responses:
 *       200:
 *         description: Producto agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *
 * /api/productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente
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
 *                     $ref: '#/components/schemas/Producto'
 *   put:
 *     summary: Actualizar un producto
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
 *             $ref: '#/components/schemas/ActualizarProducto'
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
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
 *     summary: Eliminar un producto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
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
 * /api/productos/nombre/{name}:
 *   get:
 *     summary: Obtener productos por nombre
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Productos obtenidos exitosamente
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
 *                     $ref: '#/components/schemas/Producto'
 *
 * /api/productos/categoria/{name}:
 *   get:
 *     summary: Obtener productos por categoría
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Productos obtenidos exitosamente
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
 *                     $ref: '#/components/schemas/Producto'
 *
 * /api/productos/subcat/{name}:
 *   get:
 *     summary: Obtener productos por subcategoría
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Productos obtenidos exitosamente
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
 *                     $ref: '#/components/schemas/Producto'
 *
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       properties:
 *         id_producto:
 *           type: integer
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         Valor_CLP:
 *           type: number
 *         Valor_USD:
 *           type: number
 *         Fecha_actual_precio_dolar:
 *           type: string
 *         Precio_dolar_Observado:
 *           type: number
 *         stock:
 *           type: integer
 *         marca:
 *           type: string
 *         id_ma:
 *           type: integer
 *         nombre_cat:
 *           type: string
 *         id_cat:
 *           type: integer
 *         nombre_subcat:
 *           type: string
 *         id_scat:
 *           type: integer
 *         estado:
 *           type: string
 *         id_usr:
 *           type: integer
 *         nombre_y_apellido:
 *           type: string
 *
 *     NuevoProducto:
 *       type: object
 *       required:
 *         - nombre
 *         - descripcion
 *         - precio_unitario
 *         - stock
 *         - estado
 *         - id_ma
 *         - id_scat
 *       properties:
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         precio_unitario:
 *           type: number
 *         stock:
 *           type: integer
 *         estado:
 *           type: boolean
 *         id_ma:
 *           type: integer
 *         id_scat:
 *           type: integer
 *
 *     ActualizarProducto:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         precio_unitario:
 *           type: number
 *         stock:
 *           type: integer
 *         estado:
 *           type: boolean
 *         id_ma:
 *           type: integer
 *         id_scat:
 *           type: integer
 */
// Obtenemos el metodo Router de express
const { Router } = require('express');
//CONTROLADORES
const { obtenerProductos,
    agregarProducto,
    obtenerProducto,
    obtenerProductoNombre,
    obtenerProductoCategoriaNombre,
    obtenerProductosubCategoriaNombre,
    editarProducto,
    eliminarProducto } = require('../controllers/producto.controllers');
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
const { TokenTrue } = require('../middlewares/auth');
const { validadorProducto } = require('../validators/producto.validators');
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
const router = Router();
//RUTAS DE PRODUCTOS
router.get('/', obtenerProductos);
router.post('/', TokenTrue, [validadorProducto], agregarProducto);
router.get('/:id', obtenerProducto);
router.get('/nombre/:name', obtenerProductoNombre);
router.get('/categoria/:name', obtenerProductoCategoriaNombre);
router.get('/subcat/:name', obtenerProductosubCategoriaNombre);
router.put('/:id',TokenTrue, [validadorProducto], editarProducto);
router.delete('/:id',TokenTrue, eliminarProducto);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;