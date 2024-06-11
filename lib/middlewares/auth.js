"use strict";

// Objetivo: verificar si el usuario tiene un token valido
var jwt = require('./../utils/jsonwebtoken');
// Metodo que verifica si el usuario tiene un token valido
var TokenTrue = function TokenTrue(req, res, next) {
  try {
    var authorization = req.headers.authorization;
    var token = authorization.split(" ").pop();
    var existo = jwt.verificarToken(token);
    if (!existo) {
      //que no puedo seguir trabajando
      return res.status(400).json({
        "ok": false,
        "msj": "token no valido"
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      "ok": false,
      "msj": "token no valido try-catch"
    });
  }
};
// Metodo que obtiene los datos del usuario desde el token
var obtenerData = function obtenerData(token) {
  try {
    var data = jwt.verificarToken(token);
    if (!data) {
      return false;
    }
    return data;
  } catch (error) {
    console.log("obtener data try-catch");
    return false;
  }
};
// Exporto el metodo
module.exports = {
  TokenTrue: TokenTrue,
  obtenerData: obtenerData
};