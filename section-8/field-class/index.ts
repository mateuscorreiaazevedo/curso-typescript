// Adicionar novos campos a uma classe

// Campos em classe

class User {
  name!: string
  age!: number
  job!: string
}

const matheus = new User()

matheus.name = 'Matheus'
matheus.age = 23
matheus.job = 'Programmer'

console.log(matheus);
