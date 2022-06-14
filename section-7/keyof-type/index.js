"use strict";
// Podemos criar um novo tipo
// aceita dados do tipo objeto, object literals e arrays
// pode criar tipos baseado nas CHAVES do objeto passado como parâmetro
const showCharName = (obje, name) => {
    return `${obje[name]}`;
};
const myChar = {
    name: 'Mateus',
    age: 23,
    hasDriveLicence: true
};
console.log(showCharName(myChar, 'age'));
