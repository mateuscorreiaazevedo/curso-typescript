"use strict";
// extends -> herança
// enviar da classe pai para a classe filho
// usar função super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class KillerMach extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMach('Destroyer', 4);
console.log(trator);
console.log(destroyer);
