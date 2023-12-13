// app/routes/web.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController'); // Adicione esta linha

// Rota para a página inicial
router.get('/', homeController.showHome);

module.exports = router;