const fs = require('fs');

const envContent = `
PORT = 3000
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = 'root'
DB_DATABASE = 'cashstashDB'
`;

fs.writeFileSync('../back/.env', envContent.trim(), (err) => {
    if (err) {
        console.error('Erro ao criar o arquivo .env:', err);
    } else {
        console.log('.env criado com sucesso!');
    }
});