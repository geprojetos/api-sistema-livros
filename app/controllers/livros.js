var mongoose = require('mongoose');
var api = {};
var livros = mongoose.model('livros');

api.listar = function(req, res) {

    console.log('Api livros');
};

module.exports = api;