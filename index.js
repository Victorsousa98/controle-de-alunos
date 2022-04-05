const express = require('express'); // express é um framework para criação de aplicações web
const bodyParser = require('body-parser');//body-parse é um módulo que permite que o express entenda o formato json

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/teste', (req, res) => {
    res.send('Hello World!');
});

//Método do express que permite que o servidor seja iniciado
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));

module.exports = app;