var http    = require('http');
var app     = require('./config/express');
require('./config/database')('localhost/sistema-livros');

http
    .createServer(app)
    .listen(3000, function() {
        console.log('Servidor rodando em http://localhost:3000'); 
    });