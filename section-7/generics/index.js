"use strict";
// pode aceitar mais de um tipo
// Mais interessante que o any
function showData(arg) {
    return `O dado é: ${arg}`;
}
// console.log(showData(5));
// console.log(showData('testeeeee'));
// CONSTRAINT EM GENERICS
// Limitar os tipos aceitos no generic type
// filtrar os tipos livres aceitos
const showProductName = (obj) => {
    return `O nome do produto é: ${obj.name}`;
};
const myObj = { name: "Camisa", color: "Preta lisa" };
const myCar = { name: "Gol", color: "Preto", engine: '1.0' };
const myCar1 = { name: 'argo', engine: '1.3', wheels: 4 };
const myPen = { engine: false, name: "nanquim", wheels: false };
// console.log(myCar1.name);
// console.log(myPen.engine);
