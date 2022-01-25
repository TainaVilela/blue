const prompt = require('prompt-sync')()

const nota1 = +prompt('Digite a primeira nota: ')
const nota2 = +prompt('Digite a segunda nota: ')
const nota3 = +prompt('Digite a terceira nota: ')
const nota4 = +prompt('Digite a quarta nota: ')

const media = (((nota1 + nota2) + nota3) + nota4) / 4

if(media >= 7){
    console.log(`Aprovado, nota ${media}`)

} if(media >= 5 || media < 7){
    console.log(`Recuperação, nota ${media}`)

} if(media < 5 ){
    console.log(`Reprovado, nota ${media}`)
}