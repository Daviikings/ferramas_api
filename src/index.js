'use strict';
// Objetivo: archivo principal de la aplicación
require('dotenv').config();
//IMPORTO EXPRESS
const express = require('express');
//SWAGGER
const swaggerConfig = require('./utils/swagger');
//INICIALIZO EXPRESS
const app = express();
// Configurar Swagger
swaggerConfig(app);
// ACTUALIZA DOLAR
const scraperdolarController = require('./controllers/scraperdolar.controller');
// Configurar el motor de plantillas (en este ejemplo, se usa EJS)
app.set('view engine', 'ejs');
//CONFIGURACIONES
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });
app.use(express.json()); //PARA QUE EXPRESS LEA JSON DEL BODY
app.use(express.urlencoded({ extended: false })); //PARA QUE EXPRESS LEA FORMULARIOS
//IMPORTO RUTAS
const loginRoutes = require('./routes/login.routes');
const productosRoutes = require('./routes/producto.routes');
const transbankRoutes = require('./routes/transbank.routes');
//RUTAS
app.use('/auth', loginRoutes);
app.use('/producto', productosRoutes);
app.use('/transbank', transbankRoutes);
//RUTA POR DEFECTO
app.all('*', (req, res) => {
    res.json(
        {
            "ok": false,
            "msj": "URL no encontrada"
        }
    );
})
//INICIO SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`servidor iniciado, escuchando en el puerto ${process.env.PORT}`);
});