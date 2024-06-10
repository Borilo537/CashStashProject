const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3306; // Porta para o servidor Node.js

app.use(bodyParser.json());
app.use(cors());

// Configurar a conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cashstashDB'
});

db.connect((err) => {
  if (err) {
    console.log('erro connect')
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para adicionar dados
app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;
  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao adicionar usuário');
    }
    res.send('Usuário adicionado com sucesso!');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
