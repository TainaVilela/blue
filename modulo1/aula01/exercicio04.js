const prompt = require('prompt-sync')()

var idade = +prompt("Qual a sua idade? ")

var idadeEmDias = 365/ idade

var idadeEmMeses = (12/ idade) * 1000


console.log(`Com ${idadeEmDias.toFixed(3)} dias, você viveu ${idadeEmMeses} meses e ${idade} anos`)