// extends -> herança
// enviar da classe pai para a classe filho

// usar função super

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine('Trator')

class KillerMach extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMach('Destroyer', 4)

console.log(trator)
console.log(destroyer)