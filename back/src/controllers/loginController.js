// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');

// Authentication
async function login(request, response) {
    // Preparar o comando de execução no banco
    const params = Array(
        request.body.email,
        // request.body.password
    );

    const query = "SELECT * FROM user_account WHERE email = ?";
    console.log("params", params)

    // Recuperar credenciais informada

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        console.log("a", request.body.password == results[0].password)
        try {
            if (results.length > 0) {
                if(request.body.password == results[0].password) {
                 
                        console.log("entrou", results)
                        // const id = results[0].id_user;
                        // const token = jwt.sign({ userId: id }, 'the-super-strong-secrect', { expiresIn: 300 });
                        // results[0]['token'] = token;

                        response
                            .status(200)
                            .json({
                                success: true,
                                message: 'Sucesso! Usuário conectado.',
                                data: results
                            });
                    
                } else {
                    
                        return response.status(401).send({
                            success: false,
                            message: 'Email or password is incorrect!'
                        });
                    
                }

            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível deletar usuário!",
                query: err,
                sqlMessage: err
            });
        }
    });
}

module.exports = {
    login
}