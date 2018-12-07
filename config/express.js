var express     = require('express');
var app         = express();
var consign     = require('consign');
var bodyparser  = require('body-parser');

app.use(express.static('./public'));
// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });
app.use(bodyparser.json());

consign({ cwd: 'app' })
    .include('models')
    .then('controllers')
    .then('helpers')
    .then('routes')
    .into(app)

module.exports = app;