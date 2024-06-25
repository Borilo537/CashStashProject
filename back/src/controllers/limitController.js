
const connection = require('../config/db');


async function updateLimit(request, response) {
    // const query = 'update limite set valor = ? where email = ?';
    const query = 'update limite set valor = ? where email = ?';


    const params = Array(
        request.body.limite,
        request.body.emailLoggado,
    );

    
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
    const query = 'SELECT valor FROM limite WHERE email = ?;';

    const params = Array(
        request.body.emailLoggado,
    );
    
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                console.log("LOGADO", data)
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
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { 
            console.log("ERRO CATCH")
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