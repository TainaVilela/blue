/* Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso ela deve ter os métodos: Envelhecer,
 engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm.
 Crie um método bio que retorna uma string com todas as informações da pessoa. */

let pessoa = {
    nome: 'Tainá',
    idade: 32,
    peso: 70,
    altura: 167,

    envelhecer: function () {
        this.idade++
    },
    engordar: function () {
        this.peso++
    },
    crescer: function () {
        this.altura++
    }
}

pessoa.envelhecer();
pessoa.engordar();
pessoa.crescer();

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, pesa ${pessoa.peso}kgs e mede ${pessoa.altura} cm`);
