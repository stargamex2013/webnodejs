// app.js
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const webRoutes = require('./app/routes/web');
const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

// Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Uso das rotas
app.use('/', webRoutes);

// Middleware para lidar com rotas não encontradas
app.use((req, res) => {
  res.status(404).render('error/404');
});

// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});