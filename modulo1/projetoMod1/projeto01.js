const prompt = require('prompt-sync')()

let text1 = "\nA nova agente secreto do MI6 recebeu a difícil missão de resgatar o 1°Ministro que foi sequestrado por terroristas" +
    "\najude a nova 007 a concluir sua missão!"

let text2 ="1 para Sim ou 0 não"

let text3 = "Oh não!!!"

console.log(text1)
console.log(text2)

let res1 = +prompt("A agente 008 conseguiu descobrir onde é o cativeiro? ")
let res2 = +prompt("Passar pelos terroristas que guardam o cativeiro é uma tarefa dificílima, a agente secreto conseguiu passar por eles ?")
let res3 = +prompt("Havia uma bomba presa ao 1°Ministro, que iria explodir caso ele saísse do cativeiro, ela desarmou essa bomba? ")
console.log(text3)
let res4 = +prompt("Enquanto ela resgatava o Ministro, o piloto do helicoptero que a aguardava foi eliminado, ela derrotou esse terrorista que estava no helicóptero? ")
let res5 = +prompt("Ela conseguiu entrar no helicóptero do MI6 com o Ministro e fugir? ")

const res = (((res1 + res2) + res3) + res4) + res5

if(res == 0){
    console.log( res + ' Você falha miseravelmente.')
} if(res == 1 || res == 2){
    console.log(res +' Você falha, mas ainda consegue fugir da situação.')
} if(res == 3){
    console.log(res +' Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.')
} if(res == 4){
    console.log(res +' Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.')
} if(res == 5 ){
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
}
