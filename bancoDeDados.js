const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados(){
        try {
            console.log("Banco de dados iniciado")

            await mongoose.connect(process.env.MONGO_URL) // cria arquivo sensível

            console.log('Conexão com o banco de dados feita com sucesso!')

        } catch(erro) {
            console.log(erro)
        }
}


module.exports = conectaBancoDeDados