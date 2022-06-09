// Arrays

// Arrays só com números -> number[]
// Arrays só com string -> string[]

// sempre que for tipar os valores do array, colocar o tipo de dado (ex: number) mais os colchetes [], assim: number[]

let numbers: number[] = [1, 2, 3, 4, 6]

numbers.push(5)

const filter = numbers.filter(num => {
  return num % 2 === 0
})

console.log(filter);

let names: string[] = ['MAteus', 'AnA ClArA']

const filt = names.filter(name => {
  const newName = name.toLowerCase()
  return newName.includes('m')
})
console.log(filt);
