/*
Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.
*/

const guarda = [0];
const minimo = Math.ceil(0);
const maximo = Math.floor(100);
let contador = 0;
let sorteio = Math.random() * (maximo - minimo + 1) + minimo

while (contador < 20) {
    sorteio = Math.random() * (maximo - minimo + 1) + minimo
    sorteio = parseInt(sorteio)
    if (guarda.indexOf(sorteio) === -1) {
        guarda.push(sorteio);
        contador++;
    }
}
guarda.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(guarda)