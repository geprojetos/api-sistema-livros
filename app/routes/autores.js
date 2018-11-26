module.exports = function(app) {

    var api = app.controllers.autores;

    app
        .route('/autores')
        .get(api.listagem)
        .post(api.cadastrar)

    app
        .route('/autores/:id')
        .get(api.buscar)
}