"use strict";

// Objetivo: Validar los datos de entrada de las peticiones
var _require = require('express-validator'),
  validationResult = _require.validationResult;
var _require2 = require('./error'),
  httpError = _require2.httpError;
// Validar los datos de entrada de las peticiones
var validadorResultado = function validadorResultado(req, res, next) {
  try {
    validationResult(req)["throw"]();
    return next();
  } catch (error) {
    return httpError(res, error.array());
  }
};
// Exportamos la funcion
module.exports = {
  validadorResultado: validadorResultado
};