"use strict";
function showBalance(balance) {
    console.log(`O saldo da conta é: R$${balance}`);
}
showBalance(100);
showBalance('230');
function showUserRole(role) {
    if (typeof role === "boolean") {
        return 'usuário não aprovado!';
    }
    return `o user é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole(`admin`));
