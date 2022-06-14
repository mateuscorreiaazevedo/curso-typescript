// métodos são como funções da classe
// podemos criá-los junto das classes e os objetos podem utilizá-los

class Dwarf {
  name
  constructor(name: string) {
    this.name = name
  }
  greeting() {
    console.log("Hey Stranger!");
    
  }
}

const jimmy = new Dwarf('Jimmy')

console.log(jimmy.name);

jimmy.greeting()


class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.hp = hp
    this.model = model
  }

  showDetails(){
    return `O caminhão do modelo: ${this.model}, tem ${this.hp} cavalos de Potência`
  }
}

const mercedes = new Truck('mercedes', 540)
const scania = new Truck('scania', 580)

console.log(mercedes.showDetails())
console.log(scania.showDetails())