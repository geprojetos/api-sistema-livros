var mongoose = require('mongoose');
var api = {};
var autores = mongoose.model('autores');
// var autores = [
//     {
//         id: 1,
//         nome: "Autor 1",
//         email: "autor1@email.com"
//     },
//     {
//         id: 2,
//         nome: "Autor 2",
//         email: "autor1@email.com"
//     }
// ];

api.listagem = function(req, res) {

    // res.json(autores);
    autores
        .find({})
        .then(autores => {

            console.log('Autores carregados com sucesso');
            res.json(autores);
        }, erro => {
            
            console.log(erro);
            res.status(500).json(erro)
        })
}

module.exports = api;