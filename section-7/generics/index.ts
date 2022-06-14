// pode aceitar mais de um tipo
// Mais interessante que o any

function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5));
console.log(showData('testeeeee'));
