"use strict";
const newTruck = {
    km: 10000,
    description: 'caminhão de entrega',
    kg: 1000
};
function showKm(km) {
    return `O veículo já rodou ${km}Km`;
}
console.log(showKm(newTruck.km));
