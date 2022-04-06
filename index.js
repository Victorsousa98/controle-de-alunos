const express = require('express'); // express é um framework para criação de aplicações web
const bodyParser = require('body-parser');//body-parse é um módulo que permite que o express entenda o formato json
const routes = require('./routes'); 

const app = express();

//Porta que o servidor vai escutar
    const port = process.env.PORT || 3000;

//chamando o index.js que está dentro de routes
    routes(app);    

//Método do express que permite que o servidor seja iniciado
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));

module.exports = app;