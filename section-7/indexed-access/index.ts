type truck = {
  km: number,
  kg: number,
  description: string
}

type Km = truck['km']

const newTruck: truck = {
  km: 10000,
  description: 'caminhão de entrega',
  kg: 1000
}

function showKm(km: Km) {
  return `O veículo já rodou ${km}Km`
}

console.log(showKm(newTruck.km));