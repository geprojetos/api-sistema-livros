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
            res.status(500).json(erro)
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
            res.status(500).json(erro)
        });
    
}

module.exports = api;