"use strict";

// Objetivo: Crear y verificar token
var jwt = require('jsonwebtoken');

// Creamos el token
var crearToken = function crearToken(usuario) {
  var token = jwt.sign({
    usuario: usuario
  }, process.env.SECRETO);
  return token;
};
// Verificamos el token
var verificarToken = function verificarToken(token) {
  try {
    var existo = jwt.verify(token, process.env.SECRETO);
    return existo;
  } catch (error) {
    return false;
  }
};
// Exportamos los metodos
module.exports = {
  crearToken: crearToken,
  verificarToken: verificarToken
};