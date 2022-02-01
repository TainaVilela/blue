/* Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra lista com o consumo
desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
O modelo do carro mais econômico;
Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros
e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.*/

models = ['onix', 'uno', 'versa']
liters = [12, 14, 16]
fuel = 5.5
distance = 1000
cons1000 = []
cost = []

economy = 0
carEconomy = ''

for(modelsConsu of liters){
    if(modelsConsu > economy){
        economy = modelsConsu
    }
    cons1000.push(1000 / modelsConsu)
    cost.push((1000 / modelsConsu)* liters)

}
carEconomy = models[liters.indexOf(economy)]

for(x = 0; x < modelsConsu.length; x++){
    console.log(`O carro: ${models[x]}, consome ${cons1000[x].toFixed(2)} litros para 1000km, e um custo de ${cost[x]. toFixed(2)}`)
}
console.log(`O carro mais é economico é ${carEconomy}, consumo de ${economy}km/l`)

