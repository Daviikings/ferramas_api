//  Importamos el validador de express
const { check } = require('express-validator');
const { validadorResultado } = require('../utils/validacion');
// Validar los datos de entrada de las peticiones
const validadorProducto = [
    check('nombre')
        .exists().withMessage("Favor ingresar nombre del Producto")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 3, max: 64}).withMessage("Favor este campo debe tener un minimo de 3 y un maximo 255"),
    check('descripcion')
        .exists().withMessage("Favor ingresar descripcion en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio"),
    check('precio_unitario')
        .exists().withMessage("Favor ingresar precio_unitario en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 1}).withMessage("Favor este campo debe tener un minimo de 1"),
    check('stock')
        .exists().withMessage("Favor ingresar stock en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 1, max: 1000}).withMessage("Favor este campo debe tener un minimo de 1 y un maximo 1000"),
    check('estado')
        .exists().withMessage("Favor ingresar estado en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isInt({min: 0, max: 1}).withMessage("Favor solo debe ingresar si 1 o 0"),
    check('id_ma')
        .exists().withMessage("Favor ingresar id_ma en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isInt({min: 0}).withMessage("Favor solo debe ingresar  numero de marca"),
    check('id_scat')
        .exists().withMessage("Favor ingresar id_scat en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isInt({min: 0}).withMessage("Favor solo debe ingresar  numero de subcategoria"),
    (req, res, next) => {
        return validadorResultado(req, res, next);
    }
];
//  Exportamos el validador
module.exports = {
    validadorProducto
}