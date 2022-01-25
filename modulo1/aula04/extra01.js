/* Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
    Salários até R$ 280,00 (incluindo): aumento de 20%.
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.
Após o aumento ser realizado, informe na tela:
    O salário antes do reajuste.
    O percentual de aumento aplicado.
    O valor do aumento.
    O novo salário, após o aumento.*/
const prompt = require('prompt-sync')()

salarioAntes = +prompt('Qual o seu salário? ')

reajuste1 = (0.20 * salarioAntes)
reajuste2 = (0.15 * salarioAntes)
reajuste3 = (0.10 * salarioAntes)
reajuste4 = (0.05 * salarioAntes)

if(salarioAntes < 280){
    console.log(`O seu salário atual é de ${salarioAntes}, sofreu um reajuste de 20%, foi aumentado em ${reajuste1.toFixed(2)}% e subiu para ${salarioAntes + reajuste1} , indo para o total de ${salarioAntes + reajuste1}`)
} if(salarioAntes >= 280 && salarioAntes < 700){
    console.log(`O seu salário atual é de ${salarioAntes}, sofreu um reajuste de 15%, foi aumentado em ${reajuste2.toFixed(2)}% e subiu para ${salarioAntes + reajuste2} , indo para o total de ${salarioAntes + reajuste2}`)
} if(salarioAntes >= 700 && salarioAntes < 1500) {
    console.log(`O seu salário atual é de ${salarioAntes}, sofreu um reajuste de 10%, foi aumentado em ${reajuste3.toFixed(2)}% e subiu para ${salarioAntes + reajuste3} , indo para o total de ${salarioAntes + reajuste3}`)
} if(salarioAntes >= 1500) {
    console.log(`O seu salário atual é de ${salarioAntes}, sofreu um reajuste de 5%, foi aumentado em ${reajuste4.toFixed(2)}% e subiu para ${salarioAntes + reajuste4} , indo para o total de ${salarioAntes + reajuste4}`)
}