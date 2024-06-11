"use strict";

// Objetivo: Validar los datos que se envian desde el cliente para crear un usuario
var _require = require('express-validator'),
  check = _require.check,
  validationResult = _require.validationResult;
var _require2 = require('./../utils/error'),
  httpError = _require2.httpError;
// Validar los datos que se envian desde el cliente para crear un usuario
var validadorUsuario = [check('nombre').exists().withMessage("Favor debe ir el atributo nombre").notEmpty().withMessage("Favor este campo debe venir con informacion"), check('apellido').exists().withMessage("Favor debe ir el atributo apellido").notEmpty().withMessage("Favor este campo debe venir con informacion"), check('password').exists().withMessage("Favor debe ir el atributo password").notEmpty().withMessage("Favor este campo debe venir con informacion").isLength({
  min: 8,
  max: 16
}).withMessage("El minimo de caracteres son 8 y el maximo son 16"), check('rut').exists().withMessage("Favor debe ir el atributo rut ej: 12345678-9").notEmpty().withMessage("Favor este campo debe venir con informacion ej: 12345678-9").isLength({
  min: 3
}).withMessage("El minimo de caracteres son 1-K"), check('direccion').exists().withMessage("Favor debe ir el atributo direcion ej: Calle 123").notEmpty().withMessage("Favor este campo debe venir con informacion ej: Calle 123").isLength({
  min: 5
}).withMessage("El minimo de caracteres son 5"), check('telefono').exists().withMessage("Favor debe ir el atributo telefono ej: 912345678").notEmpty().withMessage("Favor este campo debe venir con informacion ej: 912345678").isLength({
  min: 9
}).withMessage("El minimo de caracteres son 9"), check('correo').exists().withMessage("Favor debe ir el atributo correo ej: ejemplo@email.com").notEmpty().withMessage("Favor este campo debe venir con informacion ej: ejemplo@email.com").isLength({
  min: 4
}).withMessage("El minimo de caracteres son 4"), check('activo').exists().withMessage("Favor debe ir el atributo activo").notEmpty().withMessage("Favor este campo debe venir con informacion").isInt({
  min: 0,
  max: 1
}).withMessage("Favor colocar 1 si es verdadero o 0 si es falso"), check('rol').exists().withMessage("Favor debe ir el atributo rol Ej: Admin = 4, Sup = 3, jefe = 2,usuario = 1").notEmpty().withMessage("Favor este campo debe venir con informacion Ej: Admin = 4, Sup = 3, jefe = 2,usuario = 1").isInt({
  min: 1,
  max: 4
}).withMessage("Favor colocar Ej: Admin = 4, Sup = 3, jefe = 2,usuario = 1"), function (req, res, next) {
  try {
    validationResult(req)["throw"]();
    next();
  } catch (error) {
    return httpError(res, error.array());
  }
}];
module.exports = {
  validadorUsuario: validadorUsuario
};