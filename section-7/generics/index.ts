// pode aceitar mais de um tipo
// Mais interessante que o any

function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

// console.log(showData(5));
// console.log(showData('testeeeee'));

// CONSTRAINT EM GENERICS

// Limitar os tipos aceitos no generic type
// filtrar os tipos livres aceitos

const showProductName = <T extends {name: string}> (obj: T) => {
  return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Camisa", color: "Preta lisa"}
const myCar = {name: "Gol", color: "Preto", engine: '1.0'}

// console.log(showProductName(myObj));
// console.log(showProductName(myCar));

//  INTERFACE EM GENERICS

interface MyObject<T, U> {
  name: string,
  wheels: T,
  engine: U
}

type Car = MyObject<number, string>
type Pen = MyObject<boolean, boolean>

const myCar1: Car = { name: 'argo', engine: '1.3', wheels: 4}
const myPen: Pen = {engine: false, name: "nanquim", wheels: false}

// console.log(myCar1.name);
// console.log(myPen.engine);


