
const connection = require('../config/db');

require("dotenv").config();


async function login(request, response) {

    const params = Array(
        request.body.email,
    );

    const query = "SELECT * FROM user_account WHERE email = ?";
    console.log("params", params)

   
    connection.query(query, params, (err, results) => {
        console.log("BODY PASSWORD", request.body.password == results[0].password)
        try {       
            if (results.length > 0) {
                if(request.body.password == results[0].password) {
                 
                        console.log("entrou", results)
                        response
                            .status(200)
                            .json({
                                success: true,
                                message: 'Sucesso! Usuário conectado.',
                                data: results
                            });
                    
                } else {
                    console.log("EMAIL OU SENHA INCORRETA")
                        return response.status(401).send({
                            success: false,
                            message: 'Email or password is incorrect!'
                        });
                }

            } else {
                console.log("VAZIO")
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(400).json({
                    succes: false,
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