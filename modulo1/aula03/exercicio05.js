const prompt = require('prompt-sync')()

let valorA = +prompt('Qual o valor do lado A? ')
let valorB = +prompt('Qual o valor do lado B? ')
let valorC = +prompt('Qual o valor do lado C? ')

let valorNovoA

if(valorB > valorA){

    valorNovoA = valorA
    valorA = valorB
    valorB = valorNovoA

} if( valorC > valorB){

    valorNovoA = valorB
    valorB = valorC
    valorC = valorNovoA

} if(valorC > valorA){

    valorNovoA = valorA
    valorA = valorB
    valorC = valorNovoA

}
console.log(`valorA: ${valorNovoA}, valorB: ${valorB}, valorC: ${valorC}`)

if (valorNovoA > (valorB + valorC) && valorNovoA == (valorB + valorC)){
    console.log('NAO FORMA TRIANGULO')
} else if (valorNovoA == (valorB + valorC)){
    console.log('TRIANGULO Retângulo')
} else if (valorA > (valorB + valorC)){
    console.log('TRIANGULO Obtuso')
} else if (valorA < (valorB + valorC)){
    console.log('TRIANGULO Octangulo')
} else if (valorNovoA == valorB || valorNovoA == valorC){
    console.log('TRIANGULO ')
} else{
    console.log('TRIANGULO Isosceles')
}

