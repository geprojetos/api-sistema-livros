module.exports = function(app) {

    var api = app.controllers.livros;

    app
        .route('/livros')
        .get(api.listar)
        .post(api.cadastrar)

    app.route('/livros/:id')
        .get(api.buscar)
        .put(api.atualizar)
}