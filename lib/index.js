'use strict';

// Objetivo: archivo principal de la aplicación
require('dotenv').config();
//IMPORTO EXPRESS
var express = require('express');
//SWAGGER
var swaggerConfig = require('./utils/swagger');
//INICIALIZO EXPRESS
var app = express();
// Configurar Swagger
swaggerConfig(app);
// ACTUALIZA DOLAR
var scraperdolarController = require('./controllers/scraperdolar.controller');
// Configurar el motor de plantillas (en este ejemplo, se usa EJS)
app.set('view engine', 'ejs');
//CONFIGURACIONES
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});
app.use(express.json()); //PARA QUE EXPRESS LEA JSON DEL BODY
app.use(express.urlencoded({
  extended: false
})); //PARA QUE EXPRESS LEA FORMULARIOS
//IMPORTO RUTAS
var loginRoutes = require('./routes/login.routes');
var productosRoutes = require('./routes/producto.routes');
var transbankRoutes = require('./routes/transbank.routes');
//RUTAS
app.use('/auth', loginRoutes);
app.use('/producto', productosRoutes);
app.use('/transbank', transbankRoutes);
//RUTA POR DEFECTO
app.all('*', function (req, res) {
  res.json({
    "ok": false,
    "msj": "URL no encontrada"
  });
});
//INICIO SERVIDOR
app.listen(process.env.PORT, function () {
  console.log("servidor iniciado, escuchando en el puerto ".concat(process.env.PORT));
});