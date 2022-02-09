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
// let juntos = 1;
let chances = 3;
let count = 0;
let codigo = [];
let numeroCodigo = [];
// let tempo = 0;

//Variáveis para armazenar os status do personagem

const infoMonstro = {
    monstro: monstroNome,
    vida: true,
    monstroNaCidade: true
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
}
if(escolha == 2 || escolha == `nao`){
    separados = false;
};

//Buscar elementos para antídoto e bala capaz de matar o monstro

console.log(`
Após horas de caminhada no meio da floresta, ${cacador2} encontra a cápsula espacial, para conseguir pegar as partículas de fibra espacial
ele precisa acertar uma sequencia de 3 números que não se repetem de 1 à 5.
`);

// valindando a condição pela opção escolhida

function tentativa() {
    for (let i = 1; i < 6; i++) {
        let codigo = parseInt(prompt('Adivinhe a sequencia para resgatar seu elemento: ' + i + ': '));
        numeroCodigo.push(codigo)
    }
}
do{
    for (i = 0; i < chances; i++) {
        codigo.push(Math.floor(Math.random() * 5 + 1));
    }
}
while (codigo != numeroCodigo) {
    console.log(`Você erro o código`);
    codigo = parseInt(prompt('Adivinhe o código de 5 dígitos: '));

    if (codigo == numeroCodigo) {
        console.log('Você acertou!');
    };
};