// Um tipo de array, com tipo e quantidade definidas
type fiveNumbers = [number, number, number, number, number]

const myNumbers: fiveNumbers = [1, 2, 3, 4, 5]

type NameAndAge = [string, number]

const user: NameAndAge = ['Mateus', 23]

console.log(user[0]);

user[0] = 'Marcos'

user[1] = 33

console.log(user[0], user[1]);
