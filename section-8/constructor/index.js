"use strict";
// Constructor é uma função que nos 'da a possibilidade de inicia um objeto com ->
// -> valores nos seus campos
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const clara = new NewUser('Ana Clara', 23);
const mateus = new NewUser('Mateus');
console.log(clara);
console.log(mateus);
