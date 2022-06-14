// Podemos criar um novo tipo
// aceita dados do tipo objeto, object literals e arrays
// pode criar tipos baseado nas CHAVES do objeto passado como parâmetro

type Character = {name: string, age: number, hasDriveLicence: boolean}
type C = keyof Character

const showCharName = (obje: Character, name: C): string => {
  return `${obje[name]}`
};

const myChar: Character = {
  name: 'Mateus',
  age: 23,
  hasDriveLicence: true
}

console.log(showCharName(myChar, 'age'));
