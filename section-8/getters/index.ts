// são formas de retornar propriedades do objeto
// pode-se modificá-las neste retorno
// um método para ler propriedades

class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return `${this.name} ${this.surname}`
  }
}

const mateusAzevedo = new Person('Mateus', 'Azevedo')

console.log(mateusAzevedo.fullName);
