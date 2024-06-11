//  Importamos el validador de express
const { check } = require('express-validator');
const { validadorResultado } = require('../utils/validacion');
// Validar los datos de entrada de las peticiones
const validadorTransbank = [
    check('buyOrder')
        .exists().withMessage("Favor ingresar 'Orden de compra001'")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 3, max: 30}).withMessage("Favor este campo debe tener un minimo de 3 y un maximo 30"),
    check('sessionId')
        .exists().withMessage("Favor ingresar 'sesion1234557545'")
        .notEmpty().withMessage("Favor este campo no puede venir vacio"),
    check('amount')
        .exists().withMessage("Favor ingresar precio en Pesos Ej: 10000")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 1}).withMessage("Favor este campo debe tener un minimo de 1"),
    check('returnUrl')
        .exists().withMessage("Favor ingrese URL pago exitoso Ej: http://localhost:3000/pagoexitoso")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 1, max: 1000}).withMessage("Favor este campo debe tener un minimo de 1 y un maximo 1000"),
    (req, res, next) => {
        return validadorResultado(req, res, next);
    }
];
//  Exportamos el validador
module.exports = {
    validadorTransbank
}