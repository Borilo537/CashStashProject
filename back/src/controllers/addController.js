const connection = require('../config/db');

async function updateGastos(request, response) {
    const query = 'UPDATE gastos SET gastado = ?;';

    const params = Array(
        request.body.gasto,
    );

    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                console.log("gasto enviado")
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `gasto enviado!`,
                        data: results
                    });
            } else {
                console.log("erro enviando")
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
            console.log("erro total")
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}


async function selectGastos(request, response) {
    const query = 'SELECT * FROM gastos;';

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, (err, results) => {
        try {
            if (results) {
                console.log("res", results[0].gastado)
                response
                    .status(201)
                    .json({
                        success: true,
                        message: results[0].gastado,
                        data: results[0].gastado
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
    updateGastos,
    selectGastos
}