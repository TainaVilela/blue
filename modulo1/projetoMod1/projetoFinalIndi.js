/* Após uma incessante busca pelo 1° Ministro o local do cativeiro foi descoberto, um armazém de uma loja desativada
* no centro da cidade, local super movimentado.
* Personages: Agente secreto
*              1° Ministro
*              sequestrador
* Desafio: Resgatar o 1° Ministro, desarmar as bombas que estão presas ao refém e prender os sequestradores.
* Opções de escolha: Explodir o cativeiro: Matar a todos e encerrar o jogo.
*                    Tentar uma conversa amigável com o sequestrador: O sequestrador vai saber que o cativeiro foi descoberto
* e mudar o refém de lugar, iniciando uma nova busca e consequentemente o jogo.
*                    Esperar o momento que o sequestrador sair para comprar comida aborda-lo de surpresa e prendê-lo,
* recuperando a chave do cativeiro: Abordar o sequestrado a luz do dia e provocar um tiroteio no centro da cidade lotado: Sequestrador causa
* uma enorme movimentação e consegue fugir e o jogo é reiniciado,
* ou, Esperar anoitecer e pegar ele quando a rua estiver vazia e escura: Sequestrador preso, hora de entrar no cativeiro e tentar desarmar as bombas:
* As bombas presas no refém têm um código de apenas 3 número ímpares que não se repetem de 1 a 5 e 3 tentativas para desarmar a bomba:
* Se errar todas, o jogo se encerra, caso acerte os número, o refém é liberto e o jogo termina.*/

const prompt = require('prompt-sync')()

const text1 = "\nA nova agente secreto do MI6 recebeu a difícil missão de resgatar o 1°Ministro que foi sequestrado por terroristas" +
    "\najude a nova 007 a concluir sua missão!"

const text3 = "Oh não!!!"

console.log(text1)

//Variáveis para armazenar os status do personagem

const explodir = ""
const desarmarBombas = "";
const conversa = "";
const saidaCativeiro = "";
const digitarCodigo = "";

//Perguntas que alterarão esses status do personagem

const pergunta1 = prompt('Você quer explodir o cativeiro? ');
const pergunta2 = prompt('Conversar amigavelmente com o sequestrador? ');
const pergunta3 = prompt('Você quer aguardar o sequestrador e prendê-lo quando ele sair a noite para comprar comida? ');
const pergunta4 = +prompt('Digite o código da bomba: ');

/*Laço de repetição que determinará os ciclos em que a história vai se passar. Determinar o que acontecerá ao final do
 ciclo e como ficarão os status
 while para fazer o jogo encerrar, reiniciar ou seguir.
 for para contagem das tentativas de senha*/

//Variável para controle da passagem do tempo

//Variáveis de controle dos status e situações da história

/*Condicionais para alterações dessas variáveis

if para as escolhas sobre explodir, conversar, prender.
if para fazer a abordagem de dia ou a noite
*/

//Funções para executar cada uma das tarefas function Reiniciar

//Conteúdo de condicionais, laços, funções e objetos bem aplicados
