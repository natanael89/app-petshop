const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: localhost,
    user: root,
    port: 3307,
    password: '8626@',
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!')
    console.log('Acesse: http://localhost:3000/index');
});

module.exports = connection;