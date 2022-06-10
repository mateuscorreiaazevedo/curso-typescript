// usado pra checar se existe uma propriedade no objeto

class Dog {
  name
  breed

  constructor(name: string, breed?: string) {
    this.name = name
    if(breed) {
      this.breed = breed
    }
  }
}
const tobi = new Dog('tobi', 'dalmata')
const rex = new Dog('rex')

const showDog = (dog: Dog) => {
  if('breed' in dog) {
    console.log(`${dog.name} é da raça ${dog.breed}`);
  } else {
    console.log(`${dog.name} é um viralatinha caramelo <3`);
  }
}

showDog(tobi)
showDog(rex)