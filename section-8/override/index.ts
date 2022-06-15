// override é uma técnica utilizada para substituir um método de uma classe que herdamos algo
// Basta criar o método com o mesmo nome na classe filha

class Base {
  someMethod() {
    console.log('teste');
    
  }
}


class NewOption extends Base {
  someMethod() {
    console.log('outra coisa');
  }
}

const myObject = new NewOption()

myObject.someMethod()