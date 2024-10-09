
const connection = require('../config/db');

async function storeUser(request, response) {

    const query = 'INSERT INTO user_account(name, email, password) VALUES(?, ?, ?);';

    const params = Array(
        request.body.name,
        request.body.email,
        request.body.password,
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

async function createLimit(request, response) {
    const query = 'INSERT INTO limite(email, valor) VALUES(?, 500);';

    const params = [
        request.body.email
    ];

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
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }
    });
}

async function createGasto(request, response) {
    const query = 'INSERT INTO gastos(email, gastado) VALUES(?, 0);';

    const params = [
        request.body.email
    ];

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
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }
    });
}



module.exports = {
    storeUser,
    createLimit,
    createGasto
}