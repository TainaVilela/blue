const prompt = require('prompt-sync')()

nome = prompt('Qual seu nome? ')
idade = +prompt('Qual sua idade? ')

if(idade >= 18){
    console.log(nome +' pode beber')
}else{
    console.log(nome +' não pode beber')
}

