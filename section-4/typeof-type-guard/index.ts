// type guard é uma validação de tipo usando typeof
// compara o retorno do operador
// todos os dados vem em formato string (ex: "string", "number", "boolean")

function sum(a: number | string, b: number | string) {
  if (typeof a === 'string' && typeof b === 'string') {
    return (parseFloat(a) + parseFloat(b)).toString()
  } else if(typeof a === 'number' && typeof b === 'number') {
    return a + b
  } else {
    return 'impossível realizar a operação'
  }
}

console.log(sum('123', '343'));
console.log(sum(123, 343));
