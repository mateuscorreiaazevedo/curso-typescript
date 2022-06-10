// pode-se inserir uma função callback como argumento de função
// defnir o tipo de argumento e retorno aceito pela callback 

function greeting (name: string) {
  return `Olá ${name}`
}

function preGreeting (fn: (name: string) => string, userName: string) {

  console.log('preparando a função!');
  
  const greet = fn(userName)

  console.log(greet);
}

preGreeting(greeting, 'Mateus')