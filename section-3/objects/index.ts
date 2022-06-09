// syntax -> {prop: tipo, prop2: tipo2}
// determina as props de um objeto

type cord = {
  lat: number,
  long: number
}

function cordinates ({lat, long}: cord){
  console.log(lat, long); 
}

cordinates({lat: 123321.2321, long: 1232312312})