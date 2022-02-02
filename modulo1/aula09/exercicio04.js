/* Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor
votar e ao final mostrar o número de votos de cada candidato.*/

const prompt = require('prompt-sync')();

let fulano = 0;
let beltrano = 0;
let sicrano = 0;
let segundoTurno = false;
let voto;
let eleitores = +prompt(`Digite a quantidade de eleitores anônimos: `)

for(let i = 0 ; i < eleitores ;){
    console.log(
        `${i+1}º eleitor, Digite o seu voto:
    1)Fulano    2)Beltrano    3)Sicrano
        `);
    voto = +prompt(`Seu voto (1 a 3): `);
    if(voto == 1){
        fulano++;
    }else if(voto == 2){
        beltrano++;
    }else if(voto == 3){
        sicrano++;
    }else{
        console.log (`Por favor, Digite um número válido`);
        continue;
    }
    i++
}
if (fulano > beltrano && fulano > sicrano){
    console.log (`
    O Fulano foi o mais votado.
    `)
}else if (beltrano > fulano && beltrano > sicrano){
    console.log (`
    O Beltrano foi o mais votado.
    `)
}else if (sicrano > fulano && sicrano > beltrano){
    console.log (`
    O Sicrano foi o mais votado.
    `)
}else{
    console.log (`
    Houve um empate, iremos para o segundo turno.
    `)
    segundoTurno = true
}
console.log(
    `Apuração de votos:
    Fulano: ${fulano}   Beltrano: ${beltrano}   Sicrano: ${sicrano}
    `)

if(segundoTurno == true){

    while(fulano == beltrano){
        fulano = 0;
        beltrano = 0;
        for(let i = 0 ; i < eleitores ;){
            console.log(
                `${i+1}º eleitor, Digite o seu voto:
            
                1)Fulano    2)Beltrano  
                    `);
            voto = +prompt(`Seu voto (1 ou 2): `);
            if(voto == 1){
                fulano++;
            }else if(voto == 2){
                beltrano++;
            }else{
                console.log (`Por favor, Digite um número válido`);
                continue;
            }
            i++
        }
        if (fulano > beltrano ){
            console.log (`
                O Fulano foi o mais votado.
                `)
        }else if (beltrano > fulano){
            console.log (`
                O Beltrano foi o mais votado.
                `)
        }else {
            console.log (`
                Houve um empate novamente!
                `)
        }console.log(
            `Apuração de votos:
                Fulano: ${fulano}   Beltrano: ${beltrano} 
                `)
    }
    while(beltrano == sicrano){
        beltrano = 0;
        sicrano = 0;
        for(let i = 0 ; i < eleitores ;){
            console.log(
                `${i+1}º eleitor, Digite o seu voto:
            
                2)Beltrano    3)Sicrano  
                    `);
            voto = +prompt(`Seu voto (2 ou 3): `);
            if(voto == 2){
                beltrano++;
            }else if(voto == 3){
                sicrano++;
            }else{
                console.log (`Por favor, Digite um número válido`);
                continue;
            }
            i++
        }
        if (beltrano > sicrano ){
            console.log (`
                O Beltrano foi o mais votado.
                `)
        }else if (sicrano > beltrano){
            console.log (`
                O Sicrano foi o mais votado.
                `)
        }else {
            console.log (`
                Houve um empate novamente!
                `)
        }console.log(
            `Apuração do 2º turno:
                Beltrano: ${beltrano}   Sicrano: ${sicrano} 
                `)
    }
    while(fulano == sicrano){
        fulano = 0;
        sicrano = 0;
        for(let i = 0 ; i < eleitores ;){
            console.log(
                `${i+1}º eleitor, Digite o seu voto:
            
                1)Fulano    3)Sicrano  
                    `);
            voto = +prompt(`Seu voto (1 ou 3): `);
            if(voto == 1){
                fulano++;
            }else if(voto == 3){
                sicrano++;
            }else{
                console.log (`Por favor, Digite um número válido`);
                continue;
            }
            i++
        }
        if (fulano > sicrano ){
            console.log (`
                O Fulano foi o mais votado.
                `)
        }else if (sicrano > fulano){
            console.log (`
                O Sicrano foi o mais votado.
                `)
        }else {
            console.log (`
                Houve um empate novamente!
                `)
        }console.log(
            `Apuração de votos:
                Fulano: ${fulano}   Beltrano: ${sicrano} 
                `)
    }
}