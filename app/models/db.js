// models/db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbworkease'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ' + err.stack);
    return;
  }
  console.log('Conexão bem-sucedida ao MySQL com o ID ' + connection.threadId);
});

module.exports = connection;