// Validação de props opcionais

function advancedGreeting (fistName: string, lastName?: string) {
  // if(lastName != undefined) {
  //   return  console.log(`Olá ${fistName} ${lastName}, tudo bem?`);
  // }
  return lastName !== undefined ? console.log(`Olá ${fistName} ${lastName}, tudo bem com você?`) :
   console.log(`Olá ${fistName}, tudo bem?`);

}

advancedGreeting('Mateus')