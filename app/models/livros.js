var mongoose = require('mongoose');
var livros = mongoose.Schema({

    titulo: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    }
});

mongoose.model('livros', livros);