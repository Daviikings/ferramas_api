"use strict";

// Objetivo: encriptar y desencriptar contraseñas
var bcrypt = require('bcrypt');
//  Encriptar contraseña
var encriptar = function encriptar(password) {
  var salt = 10;
  var encriptado = bcrypt.hashSync(password, salt);
  return encriptado;
};
// Desencriptar contraseña
var desencriptar = function desencriptar(password, passwordHash) {
  var existo = bcrypt.compareSync(password, passwordHash);
  return existo;
};
// Exportamos los metodos
module.exports = {
  encriptar: encriptar,
  desencriptar: desencriptar
};