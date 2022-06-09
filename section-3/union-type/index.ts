function showBalance (balance: string | number) {
  console.log(`O saldo da conta é: R$${balance}`); 
}

showBalance(100)
showBalance('230')

function showUserRole (role: boolean | string) {
  if (typeof role === "boolean") {
    return 'usuário não aprovado!'
  }

  return `o user é ${role}`
}

console.log(showUserRole(false));
console.log(showUserRole(`admin`));
