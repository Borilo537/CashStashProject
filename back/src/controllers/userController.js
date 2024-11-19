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

async function accountInfo(request, response) {
    const params = [
        request.query.id,
    ];

    const query = "SELECT * FROM user_account WHERE id = ?";

    connection.query(query, params, (err, results) => {
        try {
            if (results && results.length > 0) {
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
                        message: `Nenhum ID encontrado para o email fornecido.`
                    });
            }
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível coletar o ID!",
                query: err ? err.sql : '',
                sqlMessage: err ? err.sqlMessage : ''
            });
        }
    });
}

async function alterName(request, response) {

    const params = [
        request.body.modalName,
        request.body.CurrentID,
    ];
    const query = "UPDATE user_account SET name = ? WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro ao realizar a operação.",
                sqlMessage: err.sqlMessage || "Erro desconhecido",
            });
        }

        if (results.affectedRows > 0) {
            response.status(200).json({
                success: true,
                message: `Nome de usuário atualizado com sucesso.`,
                data: results,
            });
        } else {
            response.status(400).json({
                success: false,
                message: `Nenhum usuário encontrado para o ID fornecido.`,
            });
        }
    });
}

async function alterPass(request, response) {

    const params = [
        request.body.modalNewPass,
        request.body.CurrentID,
    ];
    const query = "UPDATE user_account SET password = ? WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro ao realizar a operação.",
                sqlMessage: err.sqlMessage || "Erro desconhecido",
            });
        }

        if (results.affectedRows > 0) {
            response.status(200).json({
                success: true,
                message: `Senha de usuário atualizado com sucesso.`,
                data: results,
            });
        } else {
            response.status(400).json({
                success: false,
                message: `Nenhum usuário encontrado para o ID fornecido.`,
            });
        }
    });
}

async function deleteAccount(request, response) {

    const params = [
        request.query.CurrentID,
    ];
    const query = "UPDATE user_account SET password = ? WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro ao realizar a operação.",
                sqlMessage: err.sqlMessage || "Erro desconhecido",
            });
        }

        if (results.affectedRows > 0) {
            response.status(200).json({
                success: true,
                message: `Senha de usuário atualizado com sucesso.`,
                data: results,
            });
        } else {
            response.status(400).json({
                success: false,
                message: `Nenhum usuário encontrado para o ID fornecido.`,
            });
        }
    });
}


module.exports = {
    storeUser,
    createLimit,
    createGasto,
    accountInfo,
    alterName,
    alterPass
}