var mongoose = require('mongoose');
var api = {};
var autores = mongoose.model('autores');

api.listagem = function(req, res) {

    autores
        .find({})
        .then(autores => {

            console.log('Autores carregados com sucesso');
            res.json(autores);
        }, erro => {

            console.log(erro);
            res.json({
                status: 'Não foi possível listar os autores cadastrados',
                message: erro.message,
            })
        })
};

api.cadastrar = function(req, res) {

    autores
        .create(req.body)
        .then( autor => {

            console.log('Autor cadastrado com sucesso ' + autor);
            res.json(autor)
        }, erro => {
            
            console.log(erro);
            res.json({
                status: 'Não foi possivel cadastrar o autor ' + autor,
                message: erro.message,
            })
        });
    
};

api.buscar = function(req, res) {

    autores
        .findById(req.params.id)    
        .then(autor => {
            
            console.log('Autor encontrado com sucesso ' + autor);
            res.json(autor);
        }, erro => {

            console.log('Autor não encontrado ' + req.params.id);
            res.json({
                status: 'Não foi possivel encontrar o autor ' + req.params.id,
                message: erro.message,
            })
        });
    
};

module.exports = api;