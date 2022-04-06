const bodyparser = require('body-parser');
const express = require('express');
const pessoas = require('./pessoasRoute');

module.exports = app => {
    app.use(bodyparser.json());
    app.use(pessoas);
}