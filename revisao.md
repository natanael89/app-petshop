## connection
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3307,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!')
    console.log('Acesse: http://localhost:4000/index');
});

module.exports = connection;


## Servidor
const express = require('express');
const path = require('path');
const routes = require('../routes'); 
require('dotenv').config();
const connection = require('./connection');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '..', 'assets')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);




app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
