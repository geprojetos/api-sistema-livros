module.exports = function(app) {

    const api       = app.controllers.livros;
    const upload    = app.helpers.multer;

    app
        .route('/livros')
        .get(api.listar)
        .post(upload.single('imagem'), api.cadastrar);

    app.route('/livros/:id')
        .get(api.buscar)
        .put(api.atualizar)
        .delete(api.remover);
}