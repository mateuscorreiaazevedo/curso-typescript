// Semelhante ao any
// ele não deixa algo ser executado se não houver validação do tipo

function doSomething(x: unknown) {
  if(Array.isArray(x)) {
    console.log(x[1]);
  }
  console.log(x);
  
}

doSomething("2")