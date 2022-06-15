"use strict";
class Item {
    constructor(fist, second) {
        this.first = fist;
        this.second = second;
    }
    get showFirst() {
        return `o First é ${this.first}`;
    }
    get showSecond() {
        return `o Second é ${this.second}`;
    }
}
const newItem = new Item('caixa', 2);
console.log(newItem.showSecond, typeof newItem.second);
