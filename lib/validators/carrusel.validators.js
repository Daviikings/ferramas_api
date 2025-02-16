"use strict";

// Objetivo: Validar los datos que se envian desde el cliente para crear un usuario
var _require = require('express-validator'),
  check = _require.check,
  validationResult = _require.validationResult;
var _require2 = require('../utils/error'),
  httpError = _require2.httpError;
// Validar los datos que se envian desde el cliente para crear un usuario
var validadorCarrusel = [check('nombre').exists().withMessage("Favor debe ir el atributo nombre carrusel").notEmpty().withMessage("Favor este campo debe venir con informacion"), check('url_imagen').exists().withMessage("Favor debe ir el atributo url_imagen, si no tiene imagen colocar,agregar imagen").notEmpty().withMessage("Favor este campo debe venir con informacion"), check('estado').exists().withMessage("Favor debe ir el atributo estado").notEmpty().withMessage("Favor este campo debe venir con informacion").isInt({
  min: 0,
  max: 1
}).withMessage("Favor colocar 1 si es verdadero o 0 si es falso"), function (req, res, next) {
  try {
    validationResult(req)["throw"]();
    next();
  } catch (error) {
    return httpError(res, error.array());
  }
}];
// Exportamos la funcion
module.exports = {
  validadorCarrusel: validadorCarrusel
};