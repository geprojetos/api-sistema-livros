var mongoose = require('mongoose');
var api = {};
var livros = mongoose.model('livros');

api.listar = function(req, res) {

    livros
        .find({})
        .then(livros => {

            console.log('Livros carregados com sucesso');
            res.json(livros)
        }, erro => {

            console.log(erro.message);
            res.json({
                status: 'Não foi possível carregar os livros',
                message: erro.message
            });
        })
};

api.cadastrar = function(req, res) {

    livros
        .create(req.body)
        .then(livro => {

            console.log('Livro cadastrado com sucesso ' + livro);
            res.json(livro);
        }, erro => {

            console.log(erro.message);
            res.json({
                status: 'Não foi possível cadastrar o livro ' + livro,
                message: erro.message
            })
        })
    
};

api.buscar = function(req, res) {

    console.log('Buscando livros');
};

module.exports = api;