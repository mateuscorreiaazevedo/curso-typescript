// A interface pode ser alterada ao longo o códingo, enquanto a type alias não

interface Person {
  name: string
}

interface Person {
  age: number
}

const people: Person = { age: 23, name: 'Mateus'} 

console.log(people);

type peopleType = {
  name: string
}