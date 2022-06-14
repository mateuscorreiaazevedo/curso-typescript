"use strict";
// Podemos iniciar o campo com valor e torná-lo READONLY
// valor de consulta
class Car {
    constructor(model) {
        this.wheels = 4;
        this.model = model;
    }
}
const honda = new Car('civic');
console.log(honda);
