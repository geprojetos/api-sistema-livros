var mongoose = require('mongoose');

var autores = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    }
});

mongoose.model('autores', autores);