var express = require ('express'),
CodeBreaker = require('../app/./code-breaker');

var app = express();

app.get('/setsecret/:secret', function (req, res) {
    number = req.params.secret;
    CodeBreaker.setSecret(number);
    res.send({message: 'ok, let the game begin'});
});

app.get('/guess/:number', function (req, res) {
    number = req.params.number;
    res.send({result: CodeBreaker.guess(number)});
});

app.get('/upgrade/', function (req, res) {
    res.send({message: 'ok!!!!'});
});

app.get('/delete/', function (req, res) {
    res.send({message: 'ok, deleted'});
});

module.exports = app;