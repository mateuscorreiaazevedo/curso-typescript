"use strict";
// setters modificam e atribuem
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log(`X inserido com sucesso`);
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log(`Y inserido com sucesso`);
    }
    get getCoords() {
        return `X: ${this.x}\nY: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 15.123231312312;
console.log(myCoords.getCoords);
