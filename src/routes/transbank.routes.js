/**
 * @swagger
 * /api/transbank/credit:
 *   post:
 *     summary: Iniciar una transacción de pago con Transbank
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IniciarPago'
 *     responses:
 *       200:
 *         description: Transacción iniciada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 url:
 *                   type: string
 *                 token:
 *                   type: string
 *
 * /api/transbank/checkPayment:
 *   get:
 *     summary: Verificar el estado de una transacción de pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VerificarPago'
 *     responses:
 *       200:
 *         description: Estado de la transacción obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/RespuestaTransbank'
 *
 * /api/transbank/endPayment:
 *   get:
 *     summary: Confirmar una transacción de pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConfirmarPago'
 *     responses:
 *       200:
 *         description: Transacción confirmada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/RespuestaTransbank'
 *
 * components:
 *   schemas:
 *     IniciarPago:
 *       type: object
 *       required:
 *         - buyOrder
 *         - sessionId
 *         - amount
 *         - returnUrl
 *       properties:
 *         buyOrder:
 *           type: string
 *         sessionId:
 *           type: string
 *         amount:
 *           type: number
 *         returnUrl:
 *           type: string
 *
 *     VerificarPago:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *
 *     ConfirmarPago:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *
 *     RespuestaTransbank:
 *       type: object
 *       properties:
 *         # Agrega aquí las propiedades de la respuesta de Transbank
 */
// Obtenemos el método Router de express
const { Router } = require('express');
const { httpError } = require('../utils/error');
const { TokenTrue } = require('../middlewares/auth');
const { validadorTransbank } = require('../validators/transbank.validators');

// Importamos el SDK de Transbank
const WebpayPlus = require("transbank-sdk").WebpayPlus; 
const { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes, TransactionNonInsertedCodes } = require("transbank-sdk");
// Configura las opciones de Transbank
const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
// Instancia de nuestra Router de Express
const router = Router();

// Ruta para iniciar el pago transaction
router.post('/credit', TokenTrue, [validadorTransbank], async (req, res) => {
  try {
    const { buyOrder, sessionId, amount, returnUrl } = req.body;
    returnUrl= "http://localhost:5500/endPayment"
    // Crea la transacción con los valores recibidos
    const response = await tx.create(buyOrder, sessionId, amount, returnUrl);
    // Redirige al usuario al formulario de pago de Transbank
    //res.redirect(response.url);
    res.json(
      {
          "ok": true,
          "url": response.url,
          "token": response.token
      }
  );
  } catch (e) {
    console.error(e);
    httpError(res, "Error al iniciar pago",e);
  }
});

// chequea es estdo de la transacción en  Transbank
router.get('/checkPayment', TokenTrue, async (req, res) => {
  try {
    const { token } = req.body;
    const response = await tx.status(token);
    // Aquí puedes manejar la respuesta de Transbank
    res.json(
      {
        data: response
      }
    );
  } catch (e) {
    console.error(e);
    httpError(res, "Error al validar el estado del pago");
  }
});

// Ruta para recibir la respuesta de Transbank
router.get('/endPayment', async (req, res) => {
  try {
    const { token } = req.body;
    const response = await tx.commit(token);
    // Aquí puedes manejar la respuesta de Transbank
    console.log("ERROR!!! ",response);
    res.json(
      {
        data: response
      }
    );
  } catch (e) {
    console.error(e);
    httpError(res, "Error al confirmar Compita le hakeamos su tarjeta");
  }
});
// Exporta nuestra ruta para nuestro index.js
module.exports = router;