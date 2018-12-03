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

    if(!req.file.mimetype == 'image/jpeg' || !req.file.mimetype == 'image/png') {
        
        console.log('Arquivo não permitido');
        res.send('Arquivo não permitido');
        return;
    } else {

        const livro = [
            {
                imagem: req.file.path,
                titulo: req.body.titulo,
                autor: req.body.autor,
                preco: req.body.preco
            }
        ];

        livros
            .create(livro)
            .then(livro => {
                
                // res.send('Livro cadastrado');
                console.log('Livro cadastrado com sucesso ' + livro);
                res.json(livro);
            }, erro => {

                console.log(erro.message);
                res.json({
                    status: 'Não foi possível cadastrar o livro ' + livro,
                    message: erro.message
                })
            })
    }
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

    livros
        .findByIdAndUpdate(req.params.id, req.body)
        .then(livro => {

            console.log('Livro alterado com sucesso ' + livro);
            res.json(livro);
        }, erro => {

            console.log(erro.message);
            res.json({
                status: 'Não foi possível alterar o livro ' + req.params.id,
                message: erro.message
            })
        });
};

api.remover = function(req, res) {

    livros
        .deleteOne({ _id: req.params.id })
        .then(() => {

            console.log('Livro removido com sucesso ' + req.params.id);
            res.sendStatus(200);
        }, erro => {

            console.log(erro.message);
            res.json({
                status: 'Naõ foi possível remover o livro ' + req.params.id,
                message: erro.message
            })
        });
};

module.exports = api;