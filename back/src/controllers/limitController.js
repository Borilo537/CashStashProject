

// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');


async function updateLimit(request, response) {
    const query = 'UPDATE limite SET valor = ?;';


    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.limite,
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário cadastrado.`,
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
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}


async function selectLimit(request, response) {
    const query = 'SELECT * FROM limite;';

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, (err, results) => {
        try {
            if (results) {
                console.log("res", results[0].valor)
                response
                    .status(201)
                    .json({
                        success: true,
                        message: results[0].valor,
                        data: results[0].valor
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
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}



module.exports = {
    updateLimit,
    selectLimit
}