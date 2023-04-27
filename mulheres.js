const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Vanessa' , 
        imagem: "https://avatars.githubusercontent.com/u/56768767?v=4" ,
        minibio: "Dev em desenvolvimento"

    },
    {
        nome: 'mulher2',
        imagem: "https://avatars.githubusercontent.com/u/56768767?v=4" ,
        minibio: "Dev em desenvolvimento"
    },
    {
        nome: 'mulher3' , 
        imagem: "https://avatars.githubusercontent.com/u/56768767?v=4" ,
        minibio: "Dev em desenvolvimento"
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)

}


function mostrarPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}


app.use(router.get('/mulheres' , mostraMulheres))
app.listen(porta, mostrarPorta) // ouve a função porta e depois chama a função mostrar porta 
