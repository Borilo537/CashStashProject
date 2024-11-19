
const connection = require('../config/db');


async function addDate(request, response) {
    const formattedDate = request.body.formattedDate; // Use formattedDate diretamente do corpo da requisição

    const query = 'INSERT INTO datas(name, data, price, id) VALUES(?, ?, ?, ?);';

    const params = [
        request.body.name,
        formattedDate,
        request.body.preco,
        request.body.CurrentID,
    ];

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Não foi possível realizar o cadastro. Verifique os dados informados",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }

        response.status(201).json({
            success: true,
            message: "Sua data foi adicionada!",
            data: results
        });
    });
}


async function selectDate(request, response) {
    const query = 'SELECT name, data, price FROM datas WHERE id = ? AND data >=  NOW()';
    
    const params = [
        request.query.id,
    ];

    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response.status(200).json({
                    success: true,
                    data: results,
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

async function selectExpiredDate(request, response) {
    const query = 'SELECT name, data, price FROM datas WHERE id = ? AND data < NOW()';

    const params = [
        request.query.id,
    ];

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar as datas!",
                error: err.message,
            });
        }

        if (results.length > 0) {
            response.status(200).json({
                success: true,
                data: results,
            });
        } else {
            response.status(404).json({
                success: false,
                message: 'Nenhuma data encontrada.',
            });
        }
    });
}




module.exports = {
    addDate,
    selectDate,
    selectExpiredDate
}