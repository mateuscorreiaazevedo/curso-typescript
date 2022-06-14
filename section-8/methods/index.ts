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
