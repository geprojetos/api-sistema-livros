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

    livros
        .findById(req.params.id)
        .then(livro => {
                
            console.log('Livro encontrado com sucesso ' + livro);
            res.json(livro);
        }, erro => {

            console.log(erro.message);
            res.json({
                status: 'Não foi possível encontrar o livro ' + req.params.id,
                message: erro.message
            })
        })
};

api.atualizar = function(req, res) {

    console.log('Atualizando livro');
}

module.exports = api;