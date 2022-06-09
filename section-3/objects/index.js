"use strict";
// syntax -> {prop: tipo, prop2: tipo2}
// determina as props de um objeto
function cordinates({ lat, long }) {
    console.log(lat, long);
}
cordinates({ lat: 123321.2321, long: 1232312312 });
