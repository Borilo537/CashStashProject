const express = require('express');
const cors = require('cors');

const dateRouter = require('./routes/dateRouter');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const limitRouter = require('./routes/limitRouter');
const addRouter = require('./routes/addRouter');

const dotenv = require('dotenv').config();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", 
    info: {
      title: "CashStash APP",
      version: "1.0.0",
      description: "API para aplicativo",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: [`${__dirname}/routes/*.js`],
};

const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
app.use(cors());

// Rota básica para verificar se a API está funcionando
app.get('/api', (req, res) => {
  res.send('API funcionando!'); // Resposta simples
});

// Habilitar as rotas na aplicação
app.use('/api', dateRouter);
app.use('/api', userRouter);
app.use('/api', limitRouter);
app.use('/api', addRouter);
app.use('/api/auth', loginRouter);

// Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT || 1903);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
