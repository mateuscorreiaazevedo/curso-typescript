"use strict";
// o tipo de retorno é relacionado ao tipo do argumento
// normalmente são utilizadas letras como T ou U para definir as funções genéricas, sendo uma ->
// -> convenção!
function showFist(arr) {
    return arr[0];
}
console.log(showFist([1, 2, 3, 4, 5, 6]));
console.log(showFist(["a", "b", 1]));
// console.log(showFist('testes')) >>-> não é aceito por não estar dentro de um array
function mergeObjs(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjs({ name: 'mateus' }, { age: 30, job: 'dev' });
console.log(newObject);
// Constraints nas Generic Functions
// >>-> As generic functions podem ter seu Escopo reduzido por constraints
// >>-> Limitação dos tipos que podem ser utilizados
// >>-> escopo menos abrangente
function biggestNumber(a, b) {
    let big;
    if (+a > +b) {
        big = a;
    }
    else {
        big = b;
    }
    return big;
}
console.log(biggestNumber(2, 3));
