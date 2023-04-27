/* servidor
const = define identificador ~> quando precisamos usar esse valor várias vezes
const porta = 3333 */

const express = require('express')
const router = express.Router() //1 parte da config rota

const app = express()
const porta = 3333

function mostrarOla(request, response) {
    response.send('Olá, mundo!')
}

function mostrarPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}
app.use(router.get('/ola' , mostrarOla)) //2 parte da config rota
app.listen(porta, mostrarPorta) // ouve a função porta e depois chama a função mostrar porta 
