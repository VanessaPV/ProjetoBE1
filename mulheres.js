const express = require('express') // INICIA O EXPRESS
const router = express.Router() // configura a1ª parte da rota
const cors = require('cors') // permite que a api seja utilizada no frontend;

const conectaBancoDeDados = require('./bancoDeDados')// liga o BD
conectaBancoDeDados() // Chama a função que conecta o BD.

const Mulher = require('./mulherModel')

const app = express() // inicia o app
app.use(express.json()) // as requesiçções em formato json
app.use(cors())
const porta = 3333 // cria o app



//GET
async function mostraMulheres(request, response){
    try {
        const mulheresVindasDoBD = await Mulher.find()

        response.json(mulheresVindasDoBD)
    }catch(erro){
        console.log(erro)

    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }
    catch (erro) {
        console.log(erro)
    }
}


//PACTH
async function corrigeMulher(request, response){
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
        if (request.body.nome){
            mulherEncontrada.nome = request.body.nome // permite alteração conforme o que foi passado
        }
    
        if (request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }
        const mulherAtualizadaNoBD = await mulherEncontrada.save()
        
        response.json(mulherAtualizadaNoBD)

    } catch (erro){
        console.log(erro)
    }

}

//DELETE
async function deletaMulher(request, response){
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem:'Mulher deletada com sucesso!'})

    } catch(erro){
        console.log(erro)

    }

}

app.use(router.get('/mulheres' , mostraMulheres)) //configurei rota get /mulheres
app.use(router.post('/mulheres', criaMulher))//configurei rota post/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei rota pacht/mulheres
app.use(router.delete('/mulheres/:id', deletaMulher)) // configurei rota delete/mulheres

//PORTA
function mostrarPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.listen(porta, mostrarPorta) // servidor ouvindo a porta






/*AULA 6.2
/programa insomnia = fazer testes do lado do cliente

AULA 6.3 PACTH
Indica correção de algum objeto*/

