// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Responsável por lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const dateRouter = require('./routes/dateRouter');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const limitRouter = require('./routes/limitRouter');
const addRouter = require('./routes/addRouter');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // A versão do OpenAPI geralmente começa com "3.0.x"
    info: {
      title: "CashStash APP",
      version: "1.0.0",
      description: "API para aplicativo",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: [`${__dirname}/routes/*.js`], // caminho para as rotas
};

module.exports = swaggerOptions;


// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o recebimento de requests em formato JSON
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', dateRouter);
app.use('/api', userRouter);
app.use('/api', limitRouter);
app.use('/api', addRouter);
app.use('/api/auth', loginRouter);
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 1903);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

module.exports = app;