const bodyparser = require('body-parser');

const niveis = require('./niveisRoute');
const turmas = require('./turmasRoute');
const pessoas = require('./pessoasRoute');

module.exports = app => {
    app.use(
        bodyparser.json(),
        pessoas,
        niveis,
        turmas
        );
}
