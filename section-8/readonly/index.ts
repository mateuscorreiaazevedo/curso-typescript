// Podemos iniciar o campo com valor e torná-lo READONLY
// valor de consulta

class Car {
  model
  readonly wheels = 4

  constructor(model: string) {
    this.model = model
  }
}

const honda = new Car('civic')

console.log(honda);
