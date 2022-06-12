import { isInterfaceDeclaration } from "typescript"

interface Human {
  name: string,
  age: number
}

interface Sayanjin extends Human {
  superPowers: string[]
}

const mateus: Human = {
   age: 23,
   name: 'Mateus Azevedo'
}

const goku: Sayanjin = {
  age: 43,
  name: 'Kakarot',
  superPowers : [
    'kamehameha',
    'kaioken',
    'genki-dama'
  ]
}

console.log(goku);
console.log(mateus);
