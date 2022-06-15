"use strict";
// public
// protected
// private
// >>-> public <-<<
//  -> todo método ou propriedade da classe pai está acessecível para a classe filha
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cIn = new C();
const dIn = new D();
// console.log(cIn.x)
// console.log(dIn.x)
// >>-> protected <-<<
//  -> só pode ser acessado por um método
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    showX() {
        return `X: ${this.x}`;
    }
    showProtected() {
        return this.showX();
    }
}
const fIn = new F();
// console.log(fIn.showProtected())
// >>-> Private <-<<
// -> só podem ser acessados na classe que os definiu
class PrivateClass {
    constructor() {
        this.name = 'Mateus';
    }
    showName() {
        return this.name;
    }
}
const privateClass = new PrivateClass();
console.log(privateClass.showName());
