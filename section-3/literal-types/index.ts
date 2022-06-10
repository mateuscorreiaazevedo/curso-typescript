let test: 'testando'
test = "testando"
console.log(test);

function showDirection (direction: "left" | 'rigth' | 'top' | 'bottom') {
  console.log(`A direção da curva é ${direction}`); 
}

showDirection("left")