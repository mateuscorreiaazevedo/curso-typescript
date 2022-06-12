// Pode ser alterada apenas uma vez, na criação do novo dado
// é uma forma de criar um VALOR CONSTANTE em um objeto
// pode-se adiciontar as intefaces
type Cars = {
  brand: string,
  readonly wheels: 4
}

const fusca: Cars = {
  brand: 'VW',
  wheels: 4
}

console.log(fusca);
