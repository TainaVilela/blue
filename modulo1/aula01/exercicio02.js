const prompt = require('prompt-sync')()

var nome1 = prompt("Qual a peça 1? ")
var numP1 = +prompt("Quantas peças 1? ")
var valorP1 = +prompt("Qual preço da peça 1? ")

var totalP1 = (numP1 * valorP1)

var nome2 = prompt("Qual a peça 2? ")
var numP2 = +prompt("Quantas peças 2? ")
var valorP2 = +prompt("Qual preço da peça 2? ")

var totalP2 = (numP2 * valorP2)

var todas = totalP1 + totalP2

console.log(`${numP1} ${nome1} custaram R$ ${totalP1} e ${numP2} ${nome2} custaram R$ ${totalP2}, um total de R$ ${todas.toFixed(2)}`)