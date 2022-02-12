const prompt = require ('prompt-sync')()

console.log(`
Um acidente no espaço faz com que um monstro caia no planeta, sua cápsula foi vista caindo em uma grande floresta proximo a cidade, porém as pessoas
da cidade alegam que o extraterrestre está rondando a cidade e quando ele começa a entrar em contato com as pessoas transmite um vírus letal 
que vai dizimar a população em 3 dias.
Ao ser reconhecido como uma ameaça, se inicia no planeta uma caçada para capturar o extraterrestre e encontrar uma cura para esse vírus.

No laboratório da cidade começam as pesquisas para encontrar uma cura para esse vírus letal,o cientista ao examinar os corpos mortos 
que há uma alteração no sangue dos infectados e que só poderá produzir o antídoto para a cura com o sangue do monstro.

Capturar esse monstro não é fácil ele ronda por toda a cidade eningém sabe ao certo o que ele pode fazer além de infectar, ele é muito poderoso 
e somente com materiais como fibra espacial produzidos no seu planeta são capazes de aniquilar o extraterrestre

`);
let monstroNome = prompt(`Digite o nome do personagem Monstro extraterrestre: `);
let cientista = prompt(`Digite o nome do personagem Cientista: `);
let cacador1 = prompt(`Digite o nome do personagem Caçador 1: `);
let cacador2 = prompt(`Digite o nome do personagem Caçador 2: `);
let sangueMonstro = true;
let fibraEspacial = true;
let escolha = "";
let separados = true;
let chances = 3;
let count = 0;
let numeroCodigo = [];
var codigo = [1, 3, 5];
var sorteio = shuffle(codigo);

// let tempo = 0;

//Variáveis para armazenar os status do personagem

const infoMonstro = {
    monstro: monstroNome,
    vida: true,
    monstroNaCidade: true
};
const pegarElemento ={
  pegou: true
};
const infoCacador1 = {
    cacador: cacador1,
    rotaCidade: true,
    rotaFloresta: false,
    capturouMaterial: true,
    rota: 0
};
const infoCacador2 = {
    cacador: cacador2,
    rotaCidade: false,
    rotaFloresta: true,
    capturouMaterial: true,
    rota: 0
};
const infoCientista = {
    cientista: cientista,
    vivo: true,
};

console.log(`
Os caçadores vão fazer uma busca, mas, precisam planejar a melhor estratégia, uma busca pela cidade atrás do extraterrestre,
uma varredura na floresta que cerca a cidade e onde especialistas afirmam que a cápsula caiu, tudo isso demanda tempo!

Você pode enviar os dois juntos para se protegerem e se ajudarem nas buscas e cada caçada em busca de seus elemento dura 1 dia,
ou, pode separá-los, enviar um para a cidade e outro para a floresta afim de ganhar tempo, mas podem haver muitos perigos!
`);

//Perguntas que alterarão esses status do personagem

console.log(`
    Deseja separar ${cacador1} e ${cacador2} para cada um buscar um elemento?: 
    1) Sim            2) Não
    `)
escolha = prompt(`R: `).toLowerCase();

if(escolha == 1 || escolha == `sim`){
    separados = true;
}else if(escolha == 2 || escolha == `nao`){
    separados = false;
}else{
    console.log('Escolha não identificada')
    //criar retorno para escolha

};

//Buscar elementos para antídoto e bala capaz de matar o monstro

console.log(`
Após horas de caminhada no meio da floresta, ${cacador2} encontra a cápsula espacial, para conseguir pegar as partículas de fibra espacial, você
tem 3 chances para acertar uma sequencia de 3 números ímpares que não se repetem de 1 à 5.
`);

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    let numero = "";

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    for (const item of array) {
        numero = numero + item.toString();
    }
    return numero;
}

// valindando a condição pela opção escolhida
function voltaAoLaboratorioComMaterial(){
    console.log('teste')
};
function voltaLaboratorioSemMaterial(){
    console.log('teste sem material')
}

function tentativa() {
    do {
        codigo = ('Digite o códico para desbloquear o elemento: ')

        if(codigo == sorteio){
            return pegarElemento;
        } else if(codigo != sorteio){
            break;
        } else{
            console.log('Jogada não identificada!')
        }
    }while(true){
    }};
do {
        codigo = ('Digite o códico para desbloquear o elemento: ');
        tentativa();
        for (tentativa = 0; tentativa < 3; tentativa++) {
            if (codigo == sorteio) {
                console.log(`Você acertou, o código é ${sorteio}, pegue seus elementos e siga para a próxima etapa.`)
                break;
            }
            if (codigo != sorteio) {
                console.log('você errou!')
                break;
            }
        }
} while (true)
    {   };

