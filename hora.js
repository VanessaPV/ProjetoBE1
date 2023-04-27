const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333
const data = new Date()
const hora = data.toLocaleTimeString('pt-BR')

function mostrarHora(request, response){
    response.send(hora)
}

function mostrarPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}
app.use(router.get('/hora', mostrarHora))
app.listen(porta, mostrarPorta) // ouve a função porta e depois chama a função mostrar porta 
