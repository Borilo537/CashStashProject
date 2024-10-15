const connection = require('../config/db');

async function updateGastos(request, response) {
    const query = 'UPDATE gastos SET gastado = gastado + ? WHERE id = ?';

    const params = Array(
        request.body.gastado,
        request.body.CurrentID,
    );

    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                console.log("gasto enviado")
                response
                    .status(201)
                    .json({
                        success: true,
                        message: 'gasto enviado!',
                        data: results
                    });
            } else {
                console.log("erro enviando add controler")
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
                    success: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

const selectGastos = (request, response) => {
    const query = 'SELECT gastado FROM gastos WHERE id = ?'; 

    const params = Array(
        request.query.id
    );

    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: results,
                        data: results
                    });

            } else {
                console.log("NÃO LOGADO")
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                        query: err,
                        sqlMessage: err
                    });
            }
        } catch (e) {
            console.log("ERRO CATCH", e)

            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                query: e.sql,
                sqlMessage: e.sqlMessage
            });
        }
    });
  };
  



module.exports = {
    updateGastos,
    selectGastos
}