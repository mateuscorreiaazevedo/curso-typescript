// Nem sempre os objetos possuem todas as props que poderiam possuir
// para opcionar uma prop, deve usar a "?" para habilitar como opcional
// ex: {name: string, lastName?: string}

function showNumbers(a: number, b: number, c?: number) {
  console.log(`A: ${a}`);
  console.log(`B: ${b}`);
  c && (console.log(`C: ${c}`))
}
showNumbers(1,2,3)
showNumbers(1,2)