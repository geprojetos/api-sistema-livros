module.exports = function(app) {

    var api = app.controllers.autores;

    app
        .route('/autores')
        .get(api.listar)
        .post(api.cadastrar)

    app
        .route('/autores/:id')
        .get(api.buscar)
        .put(api.atualizar)
        .delete(api.remover)
}