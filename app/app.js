var express = require ('express'),
CodeBreaker = require('../app/./code-breaker');

var app = express();

app.get('/setsecreto/:secret', function (req, res) {
    number = req.params.secret;
    CodeBreaker.setSecret(number);
    res.send({message: 'ok, let the game begin'});
});

app.get('/guess/:number', function (req, res) {
    number = req.params.number;
    res.send({result: CodeBreaker.guess(number)});
});

module.exports = app;