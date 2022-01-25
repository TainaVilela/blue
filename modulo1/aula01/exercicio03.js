const prompt = require('prompt-sync')()

var diaNasceu = +prompt("Qual o dia do seu nascimento? ")
var mesNasceu = +prompt("Qual o mês do seu nascimento? ")
var anoNasceu = +prompt("Qual o ano do seu nascimento? ")

var dia = diaNasceu
var mes = (1 - mesNasceu) * 30
var ano = (2022 - anoNasceu) * 365

var idadeEmDias = dia + mes + ano

idade = +prompt("Qual sua idade? ")
idadeMes = +prompt("Quantos meses? ")
idadeDias = +prompt("Quantos dias?  ")

totalDia = idade(idade * 365)
totalMes = totalDia + (idadeMes*30)

console.log(`você viveu ${idadeEmDias} dias`)
console.log(`total de dias ${totalMes + totalDia}`)
