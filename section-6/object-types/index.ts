// 1 - tipo de objeto para função com interface

interface Product {
  name: string,
  price: number,
  isAvailable: boolean
}

const ShowProducts = (product: Product) => {
  const { isAvailable, name, price } = product

  if(!isAvailable) {
    return `O produto não está disponível em estoque`
  }

  return `O Produto "${name}", está a venda pelo preco de R$${price} por até 12x sem juros!`

}


const television: Product = {
  price: 2499,
  name: 'TV de LED 42" polegadas samsung',
  isAvailable: true
}

console.log(ShowProducts(television));
console.log(ShowProducts({isAvailable: false, name: 'tênis', price: 249.89 }));