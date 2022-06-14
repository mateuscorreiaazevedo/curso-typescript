"use strict";
const fusca = {
    brand: 'VW',
    wheels: 4
};
// console.log(fusca);
let myArray = ['maçã', 'Laranja', 'banana'];
myArray.forEach(item => {
    // console.log('fruta:', item);
});
myArray = myArray.map(item => {
    return `Fruta: ${item}`;
});
console.log(myArray);
