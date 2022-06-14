"use strict";
// são formas de retornar propriedades do objeto
// pode-se modificá-las neste retorno
// um método para ler propriedades
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const mateusAzevedo = new Person('Mateus', 'Azevedo');
console.log(mateusAzevedo.fullName);
