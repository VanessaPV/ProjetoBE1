const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome:"Vanessa",
        imagem: "https://avatars.githubusercontent.com/u/56768767?v=4" ,
        minibio: "Dev em desenvolvimento"
    })
}

function mostrarPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher' , mostraMulher)) // nao pode chamar o app antes de ser criando
app.listen(porta, mostrarPorta) // ouve a função porta e depois chama a função mostrar porta 
