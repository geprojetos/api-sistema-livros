module.exports = function(app) {

    var api = app.controllers.livros;

    app
        .route('/livros')
        .get(api.listar)
}