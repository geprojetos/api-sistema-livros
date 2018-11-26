var api = {};
var autores = [
    {
        id: 1,
        nome: "Autor 1",
        email: "autor1@email.com"
    },
    {
        id: 2,
        nome: "Autor 2",
        email: "autor1@email.com"
    }
];

api.listagem = function(req, res) {

    res.json(autores);
}

module.exports = api;