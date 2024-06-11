const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// Opciones para la documentación
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ferramas-api',
      version: '1.5.0',
      description: 'Documentación de la API REST de integración de plataforma' +
       '<br> Integracion de APIs : https://mindicador.cl/api - API de divisas / https://www.transbankdevelopers.cl/ - API de pagos',
      contact: {
        name: '*',
        url: 'https://github.com/claudiosanchezt/Integracion_de_Plataforma_FERRAMAS',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
        servers: [
        {
          url: 'http://localhost:3000',
          description: 'Producción',
        },
        {
          url: 'http://localhost:3000',
          description: 'Desarrollo',
        },
      ],
    },
  },
  // Ruta a los archivos donde se encuentra documentada la API
  apis: ['src/routes/*.js'],
};
const specs = swaggerJsdoc(options);
module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};