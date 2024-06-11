const axios = require('axios');
const cron = require('node-cron');
const database = require('../config/basedatos');

// URL de la API a scrapear
const apiUrl = 'https://mindicador.cl/api';

// Función para realizar el scraping y guardar en la base de datos
async function scrapeAndSave() {
  try {
    // Establecer la conexión a la base de datos
    const db = await database();

    const response = await axios.get(apiUrl);
    const data = response.data;
    const dolarValue = data.dolar.valor;

    // Insertar los valores en la base de datos
    const query = `UPDATE divisas SET valor = ?, fecha_actual = NOW() WHERE divisas.codigo_divisa = 'USD'`;
    const values = [[dolarValue]];
    db.query(query, [values], (err, result) => {
      if (err) {
        console.error('Error al insertar en la base de datos: ', err);
        return;
      }
      console.log('Dolar Observado Hoy, insertado correctamente');
      // Cierra la conexión después de insertar los datos
      db.end();
    });
  } catch (error) {
    console.error('Error al obtener datos de la API: ', error);
    // Cierra la conexión en caso de error
    if (db) {
      db.end();
    }
  }
}
// Programar la ejecución de scrapeAndSave() cada minuto.
scrapeAndSave();
