var express     = require('express');
var app         = express();
var consign     = require('consign');
var bodyparser  = require('body-parser');

app.use(express.static('./public'));
app.use(bodyparser.json());

consign({ cwd: 'app' })
    .include('controllers')
    .then('routes')
    .into(app)

module.exports = app;