// Obtenemos el metodo Router de express
const database = require('../config/basedatos');
const { httpError } = require('../utils/error');
const { obtenerData } = require('../middlewares/auth');
const { matchedData } = require('express-validator');
//CONTROLADORES
const obtenerProductos = async (req, res) => {

    try {
        const db = await database();

        const sql = `
        SELECT 
                p.id_producto,
                p.nombre,
                p.descripcion,
                p.precio_unitario as Valor_CLP,
                ROUND((p.precio_unitario / d.valor), 2) AS Valor_USD,
                d.fecha_actual as Fecha_actual_precio_dolar,
                d.valor as Precio_dolar_Observado,
                m.nombre as marca
            FROM producto p
            INNER JOIN usuario u ON u.id_usr = p.id_usr
            INNER JOIN subcategoria sc ON sc.id_scat = p.id_scat
            INNER JOIN categoria c ON c.id_cat = sc.id_cat
            INNER JOIN marca m ON m.id_ma = p.id_ma
            LEFT JOIN divisas d ON d.codigo_divisa = 'USD'            
        `;

        const [rows] = await db.query(sql);

        res.json(
            {
                "ok": true,
                data: rows
            }
        );
    } catch (error) {
        httpError(res, "ERROR_GET_PRODUCTOS", error);
    }
}
//  METODO PARA AGREGAR UN PRODUCTOS
const agregarProducto = async (req, res) => {

    try {
        const body = matchedData(req);
        const { nombre, descripcion, precio_unitario, stock, estado, id_ma, id_scat } = req.body;
        const token = req.headers.authorization;
        const { usuario } = obtenerData(token.split(" ").pop());
        const id_usuario = usuario.id;
        const db = await database();
        const sql = `
            INSERT INTO producto(nombre, descripcion, precio_unitario, stock, estado, id_ma, id_scat, id_usr, fecha_creacion)
            VALUES('${nombre}', '${descripcion}', '${precio_unitario}', '${stock}', ${estado}, ${id_ma}, ${id_scat}, ${id_usuario}, NOW())
        `;
        const [resultado] = await db.query(sql);
        if (!resultado.insertId) {
            return res.json(
                {
                    "ok": false,
                    "msj": "!!!ERROR!!!, no se creo el Producto, revisa los datos"
                }
            );
        }
        res.json(
            {
                "ok": true
            }
        );
    } catch (error) {
        return httpError(res, "ERROR_POST_PRODUCTO",error)
    }
}
//  METODO PARA OBTENER UN PRODUCTO POR NOMBRE 
const obtenerProductoNombre = async (req, res) => {
    try {
        const { name } = req.params;
        const db = await database();
        const sql = `
        SELECT 
                p.id_producto,
                p.nombre,
                p.descripcion,
                p.precio_unitario as Valor_CLP,
                ROUND((p.precio_unitario / d.valor), 2) AS Valor_USD,
                d.fecha_actual as Fecha_actual_precio_dolar,
                d.valor as Precio_dolar_Observado,
                m.nombre as marca
        FROM producto p
            INNER JOIN usuario u ON u.id_usr = p.id_usr
            INNER JOIN subcategoria sc ON sc.id_scat = p.id_scat
            INNER JOIN categoria c ON c.id_cat = sc.id_cat
            INNER JOIN marca m ON m.id_ma = p.id_ma
            LEFT JOIN divisas d ON d.codigo_divisa = 'USD'
        WHERE p.nombre like '${name}%'
    `;
        const [rows] = await db.query(sql);
        res.json(
            {
                "ok": true,
                data: rows
            }
        );
    } catch (error) {
        return httpError(res, "ERROR_GET_OBTENER_PRODUCTO-POR-NOMBRE")
    }
}
//  METODO PARA OBTENER UN PRODUCTO POR ID 
const obtenerProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const db = await database();
        const sql = `
        SELECT 
                p.id_producto,
                p.nombre,
                p.descripcion,
                p.precio_unitario as Valor_CLP,
                ROUND((p.precio_unitario / d.valor), 2) AS Valor_USD,
                d.fecha_actual as Fecha_actual_precio_dolar,
                d.valor as Precio_dolar_Observado,
                m.nombre as marca
        FROM producto p
            INNER JOIN usuario u ON u.id_usr = p.id_usr
            INNER JOIN subcategoria sc ON sc.id_scat = p.id_scat
            INNER JOIN categoria c ON c.id_cat = sc.id_cat
            INNER JOIN marca m ON m.id_ma = p.id_ma
            LEFT JOIN divisas d ON d.codigo_divisa = 'USD'
        WHERE p.id_producto = ${id}
    `;
        const [rows] = await db.query(sql);
        res.json(
            {
                "ok": true,
                data: rows
            }
        );
    } catch (error) {
        return httpError(res, "ERROR_GET_OBTENER_PRODUCTO-POR-ID")
    }
}
//  METODO PARA OBTENER UNA CATEGORIA POR NOMBRE
const obtenerProductoCategoriaNombre = async (req, res) => {
    try {
        const { name } = req.params;
        const db = await database();
        const sql = `
        SELECT 
                p.id_producto,
                p.nombre,
                p.descripcion,
                p.precio_unitario as Valor_CLP,
                ROUND((p.precio_unitario / d.valor), 2) AS Valor_USD,
                d.fecha_actual as Fecha_actual_precio_dolar,
                d.valor as Precio_dolar_Observado,
                m.nombre as marca
        FROM producto p
            INNER JOIN usuario u ON u.id_usr = p.id_usr
            INNER JOIN subcategoria sc ON sc.id_scat = p.id_scat
            INNER JOIN categoria c ON c.id_cat = sc.id_cat
            INNER JOIN marca m ON m.id_ma = p.id_ma
            LEFT JOIN divisas d ON d.codigo_divisa = 'USD'
        WHERE c.nombre like '${name}%'

    `;
       //EJECUTAMOS LA CONSULTA 
       const [rows] = await db.query(sql);
       res.json(
           {
               "ok": true,
               data: rows
           }
       );
    } catch (error) {
        return httpError(res, "ERROR_GET_OBTENER_CATEGORIA-POR-NOMBRE-EN-PRODUCTO")
    }
}
//  METODO PARA OBTENER UN SUBCATEGORIA POR NOMBRE
const obtenerProductosubCategoriaNombre = async (req, res) => {
    try {
        const { name } = req.params;
        const db = await database();

        const sql = `
        SELECT 
                p.id_producto,
                p.nombre,
                p.descripcion,
                p.precio_unitario as Valor_CLP,
                ROUND((p.precio_unitario / d.valor), 2) AS Valor_USD,
                d.fecha_actual as Fecha_actual_precio_dolar,
                d.valor as Precio_dolar_Observado,
                m.nombre as marca
        FROM producto p
            INNER JOIN usuario u ON u.id_usr = p.id_usr
            INNER JOIN subcategoria sc ON sc.id_scat = p.id_scat
            INNER JOIN categoria c ON c.id_cat = sc.id_cat
            INNER JOIN marca m ON m.id_ma = p.id_ma
            LEFT JOIN divisas d ON d.codigo_divisa = 'USD'
        WHERE sc.nombre like '${name}%'

    `;
       //EJECUTAMOS LA CONSULTA 
       const [rows] = await db.query(sql);
       res.json(
           {
               "ok": true,
               data: rows
           }
       );
    } catch (error) {
        return httpError(res, "ERROR_GET_OBTENER_SUBCATEGORIA-POR-ID-EN-PRODUCTO")
    }
}
//  METODO PARA EDITAR UN PRODUCTO
const editarProducto = async (req, res) => {

    try {
        const { id } = req.params;
        const body = matchedData(req);
        const { nombre, descripcion, precio_unitario, stock, estado, id_ma, id_scat } = req.body;
        const token = req.headers.authorization;
        const { usuario } = obtenerData(token.split(" ").pop());
        const id_usuario = usuario.id;
        const db = await database();
        const sql = `
            UPDATE producto SET
                nombre = '${nombre}',
                descripcion = '${descripcion}',
                precio_unitario = '${precio_unitario}',
                stock = '${stock}',
                estado = ${estado},
                id_ma = '${id_ma}',
                id_scat = '${id_scat}',
                fecha_modificacion = NOW(),
                modificado_por = '${id_usuario}'                
            WHERE id_producto = ${id}
        `;
        //EJECUTAMOS LA CONSULTA
        const [resultado] = await db.query(sql);        
        if (!resultado.affectedRows) {
            return httpError(res, "Error al Editar el producto");
        }
        //RETORNAMOS LA RESPUESTA
        return res.json({
            "ok": true,
            "msj": "Se edito correctamente el producto"
        });

    } catch (error) {
        return httpError(res, "ERROR_PUT_EDITAR-EL-PRODUCTO");
    }
}
// METODO PARA ELIMINAR UN PRODUCTO
const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const db = await database();
        const sql = `DELETE FROM producto WHERE id_producto = ${id}`;
        const [resultado] = await db.query(sql);

        if (!resultado.affectedRows) {
            return httpError(res, "No se pudo eliminar el producto");
        }

        return res.json(
            {
                "ok": true,
                "msj": "El Producto, fue eliminada correctamente..."
            }
        )

    } catch (error) {
        return httpError(res, "ERROR_DELETE-EL-PRODUCTO");
    }
}
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = {  
    obtenerProductos,
    agregarProducto,
    obtenerProducto,
    obtenerProductoNombre,
    obtenerProductoCategoriaNombre,
    obtenerProductosubCategoriaNombre,
    editarProducto,
    eliminarProducto           
}