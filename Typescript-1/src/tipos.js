"use strict";
/**Tipos Básicos */
//string
const nome = 'Fernando Henrique';
const sobrenome = 'Santos Dygas';
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
const nomeComp = nomeCompleto(nome, sobrenome);
console.log(`Tipo string: ${typeof nomeComp} ${nomeComp}`);
//number
const idade = 33;
const altura = 1.67;
function idadeAltura(idade, altura) {
    return idade + altura;
}
const idadeAlt = idadeAltura(idade, altura);
console.log(`Tipo number: ${typeof idadeAlt} ${idadeAlt}`);
//boolean
const aprovado = true;
const reprovado = false;
const testeValores = (aprovado, reprovado) => {
    return aprovado && reprovado;
};
const testarValores = testeValores(aprovado, reprovado);
console.log(`Tipo boolean: ${typeof testarValores} ${testarValores}`);
//any e void
//array
const frutas = ['melância', 'maçã', 'morango'];
const verduras = ['alface', 'cenoura', 'couve', 123, true, [], {}];
function modificalista(lista) {
    let novalista = [];
    for (let item of lista) {
        novalista.push(`${item} verde`);
    }
    return novalista;
}
const listaModificada = modificalista(frutas);
console.log(`Tipo array: ${typeof listaModificada} ${listaModificada}`);
//tuplas
const endereço1 = ['W5 norte', 915, 'Asa Norte'];
let endereço2 = ['W5 norte', 912, 'Asa Norte']; //NÃO É TUPLA
console.log(`Tipo tuple: ${typeof endereço1} ${endereço1}`);
console.log(`Tipo tuple: ${typeof endereço2} ${endereço2}`);
const modificaEndereço = (endereço) => {
    if (endereço[0] == 'W5 norte') {
        endereço[0] = 'W3 norte';
    }
    return endereço;
};
const endereçoNovo = modificaEndereço(endereço1);
console.log(`Tipo tuple: ${typeof endereçoNovo} ${endereçoNovo}`);
