const mongoose = require("mongoose");

const cachorroSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    tutor: {
        type: String,
        required: true
    },
    CPF: {
        type: Number,
        required: true
    },
    nome_do_pet: {
        type: String,
        required: true,
        unique: true
    },
    idade_do_pet: {
        type: Number,
        required: true
    },
    peso_do_pet:{
        type: Number,
        required: true
    },
    vermifugacao_atualizada:{
        type: String,
        required: true
    },
    vacinacao_atualizada:{
        type: String,
        required: true
    },
    tipo_sanguineo:{
        type: String,
        required: false
    },
    historico_de_doenca:{
        type: String,
        required: true
    },
    ja_realizou_tranfusao:{
        type: String,
        required: false
    },
    endereco: {
        cep: {
            type: String,
            required: true
        },
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        },
        complemento: {
            type: String,
            required: false
        },
        referencia: {
            type: String,
            required: false
        },
        bairro: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        }  
    },
    email: {
        type: String,
        required: false
    },
    contato:{
        type: Number,
        required: true
    },
   
},{timestamp: true});

module.exports = mongoose.model('cadastroCachorro', cachorroSchema);
