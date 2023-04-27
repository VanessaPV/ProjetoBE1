/*  configuação de um servidor
const = define identificador ~> quando precisamos usar esse valor várias vezes
const porta = 3333 */

const express = require('express')

const app = express()
const porta = 3333

function mostrarPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}
// n posso chamar alguma coisa antes de ser criada
app.listen(porta, mostrarPorta) // ouve a função porta e depois chama a função mostrar porta 


// deploy - colocar nosso arquivo na nuvem