const connection = require('../config/db');
require("dotenv").config();

async function idCheck(request, response) {

    const params = [
        request.query['id']
    ];

    const query = "SELECT id FROM user_account WHERE email = ?";


    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! id coletado!`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { 
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}


async function login(request, response) {

    const params = [
        request.body.email
    ];

    const query = "SELECT * FROM user_account WHERE email = ?";
    console.log("params", params);


    connection.query(query, params, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query:", err);
            return response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao processar a sua solicitação. Por favor, tente novamente mais tarde.",
            });
        }

        if (results.length === 0) {
            return response.status(400).json({
                success: false,
                message: "Insira seus dados!",
            });
        }

        if (request.body.password === results[0].password) {
            console.log("entrou", results);
            return response.status(200).json({
                success: true,
                message: 'Sucesso! Usuário conectado.',
                data: results,
            });
            
        } else {
            console.log("EMAIL OU SENHA INCORRETA");
            return response.status(401).json({
                success: false,
                message: 'Email ou senha incorretos!',
            });
        }
    });
}

module.exports = {
    login,
    idCheck
};
