
const connection = require('../config/db');


async function addDate(request, response) {

    const query = 'INSERT INTO datas(name, month, day, price, email) VALUES(?, ?, ?, ?, ?);';

    const params = Array(
        request.body.name,
        request.body.selectedMonth,
        request.body.day,
        request.body.preco,
        request.body.emailLoggado,
    );


    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sua data foi adicionada!`,
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


async function selectDate(request, response) {
    const query = 'SELECT name, month, day, price FROM datas WHERE id = ?';
    
    const params = [
        request.body.CurrentID
    ];

    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response.status(200).json({
                    success: true,
                    data: results,  // Deve retornar apenas os resultados
                });
            } else {
                response.status(400).json({
                    success: false,
                    message: 'Nenhuma data encontrada.',
                    error: err,
                });
            }
        } catch (e) { 
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar as datas!",
                error: e.message,
            });
        }
    });
}



module.exports = {
    addDate,
    selectDate
}