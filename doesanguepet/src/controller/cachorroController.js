const mongoose = require('mongoose');
const CachorroSchema = require('../models/CachorroSchema');


const buscarTodosCachorros = async (request, response) => {
    try {
        const cachorro = await CachorroSchema.find()
        if (cachorro.length > 1) {
            return response.status(200).json({ message: `Foram encontrados ${cachorro.length} doadores`, cachorro })
        } else if (cachorro.length == 1) {
            return response.status(200).json({ message: `Foram encontrados ${cachorro.length} doadores`, cachorro })
        } else {
            return response.status(200).json({ message: `Nenhum doador encontrado`})
        }
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const buscarCachorroId = async (request, response) => {
    const { id } = request.params
    try {
        if (id.length > 24) {
            return response.status(404).json({
                Alerta: `Por favor digite o id corretamente com 24 caracteres. Caracter a mais: ${id.length - 24}.`
            })
        }
        if (id.length < 24) {
            return response.status(404).json({
                Alerta: `Por favor digite o id corretamente com 24 caracteres. Caracter a menos: ${24 - id.length}.`
            })
        }
        const cachorro = await CachorroSchema.find({ id })
        if (cachorro.length == 0) {
            return response.status(200).json({ message: `O doador não foi encontrado.` })
        }
        response.status(200).json({ message: `Doador correspondente ao id [${id}]:`, cachorro })
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const criarCadastroCachorro = async (request, response) => {
    const {
        tutor, 
        CPF, 
        nome_do_pet, 
        idade_do_pet,
        peso_do_pet,
        vermifugacao_atualizada,
        vacinacao_atualizada, 
        tipo_sanguineo,
        historico_de_doenca,
        ja_realizou_tranfusao, 
        endereco: {
            cep,
            rua,
            numero,
            complemento,
            referencia,
            bairro,
            cidade,
            estado
        }, 
        email, 
        contato
    } = request.body;

try {
    const cachorro = new CachorroSchema({
        tutor: tutor.toUpperCase(),
        CPF: CPF,
        nome_do_pet: nome_do_pet.toUpperCase(),
        idade_do_pet: idade_do_pet,
        peso_do_pet: peso_do_pet,
        vermifugacao_atualizada: vermifugacao_atualizada.toUpperCase(),
        vacinacao_atualizada: vacinacao_atualizada.toUpperCase(), 
        tipo_sanguineo: tipo_sanguineo.toUpperCase(),
        historico_de_doenca: historico_de_doenca.toUpperCase(),
        ja_realizou_tranfusao: ja_realizou_tranfusao.toUpperCase(), 
        endereco: {
            cep: cep,
            rua: rua.toUpperCase(),
            numero: numero,
            complemento:complemento.toUpperCase(),
            referencia: referencia.toUpperCase(),
            bairro: bairro.toUpperCase(),
            cidade: cidade.toUpperCase(),
            estado: estado.toUpperCase()
        },
        email: email.toUpperCase(),
        contato: contato.toUpperCase()  

    })
    if (idade_do_pet < 1 || idade_do_pet > 8){
        response.status(404).json({
            message:`Infelizmente o pet não atende ao pré-requisito da faixa etária para doadores de sangue`
        })
    }
    if(peso_do_pet < 25){
        response.status(404).json({
            message:`Infelizmente o pet não atende ao pré-requisito da faixa de peso para doadores de sangue`
        })
    }
    if(vermifugacao_atualizada != "sim"){
        response.status(404).json({
            message: `Infelizmente o pet não atende ao pré-requisito da vermifugação para doadores de sangue`
        })
    }
    if(vacinacao_atualizada != "sim"){
        response.status(404).json({
            message: `Infelizmente o pet não atende ao pré-requisito da vacinação para doadores de sangue`
        })
    }
    if(historico_de_doenca == "sim"){
        response.status(404).json({
            message: `Infelizmente o pet não atende ao pré-requisito de historico de doenças para doadores de sangue`
        })
    }
    if(ja_realizou_tranfusao == "sim"){
        response.status(404).json({
            message: `Infelizmente o pet não poderá ser cadastrado`
        })

    }

    const salvarCachorro = await cachorro.save();
    response.status(200).json({
        message: `Cadastro realizado com sucesso`,
        cachorro: salvarCachorro
    })
} catch (error) {
    response.status(400).json({
        message: error.message
    })
}}


const atualizarCadastroCachorro = async (request, response) => {

        const {
            tutor, 
            CPF, 
            nome_do_pet, 
            idade_do_pet,
            peso_do_pet,
            vermifugacao_atualizada,
            vacinacao_atualizada, 
            tipo_sanguineo,
            historico_de_doenca,
            ja_realizou_tranfusao,
            endereco,
            email, 
            contato
        } = request.body;

        const {id} = request.params
        try{
        const cachorro = await CachorroSchema.find({id}).updateOne({
            tutor, 
            CPF, 
            nome_do_pet, 
            idade_do_pet,
            peso_do_pet,
            vermifugacao_atualizada,
            vacinacao_atualizada, 
            tipo_sanguineo,
            historico_de_doenca,
            ja_realizou_tranfusao,
            endereco, 
            email, 
            contato
        }) 
     

        const cachorroAtualizado = await CachorroSchema.find({id})
        if (cachorroAtualizado.length == 0) {
            return response.status(404).json({
              message: `Pet não encontrado`
            });
          }
        response.status(200).json({
            message: "Pet atualizado com sucesso",
            cachorroAtualizado
        })
    }catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}

const deletarCadastroCachorro = async (request, response) => {
    const { id } = request.params
    try {
        if (id.length > 24) {
            return response.status(404).json({
                Alerta: `Por favor digite o id do paciente corretamente com 24 caracteres. Caracter a mais: ${id.length - 24}.`
            })
        }
        if (id.length < 24) {
            return response.status(404).json({
                Alerta: `Por favor digite o id do paciente corretamente com 24 caracteres. Caracter a menos: ${24 - id.length}.`
            })
        }
        const cadastroCachorroEncontrado = await CachorroSchema.deleteOne({ id })
        if (cadastroCachorroEncontrado.deletedCount === 1) {
            return response.status(200).send({ message: `O cadastro foi deletado com sucesso!` })
        } else {
            return response.status(404).send({ message: "O cadastro não foi encontrado." })
        }
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    buscarTodosCachorros,
    buscarCachorroId,
    criarCadastroCachorro,
    atualizarCadastroCachorro,
    deletarCadastroCachorro
}
