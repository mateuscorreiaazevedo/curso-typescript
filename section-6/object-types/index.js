"use strict";
// 1 >>-> tipo de objeto para função com interface
const ShowProducts = (product) => {
    const { isAvailable, name, price } = product;
    if (!isAvailable) {
        return `O produto não está disponível em estoque`;
    }
    return `O Produto "${name}", está a venda pelo preco de R$${price} por até 12x sem juros!`;
};
const television = {
    price: 2499,
    name: 'TV de LED 42" polegadas samsung',
    isAvailable: true
};
const showUserDetails = (details) => {
    const { email, phone } = details;
    // if(phone) {
    //   return `Email: ${email}\n Phone: ${phone}`
    // }
    // return `email: ${email}`
    return !!phone ? `email: ${email} e \n phone: ${phone}` : `email: ${email}`;
};
const userOne = {
    email: 'email_for_mateus@email.com',
    // phone: '(55) 9 5555-5555'
};
console.log(showUserDetails(userOne));
