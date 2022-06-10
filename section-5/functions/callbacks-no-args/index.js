"use strict";
// pode-se inserir uma função callback como argumento de função
// defnir o tipo de argumento e retorno aceito pela callback 
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(fn, userName) {
    console.log('preparando a função!');
    const greet = fn(userName);
    console.log(greet);
}
preGreeting(greeting, 'Mateus');
