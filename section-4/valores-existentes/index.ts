// variável em um if
// checando se valor existe

const operations = (arr: number[], operation: 'sum' | 'multiply' | 'divide' | 'sub' | undefined) => {
  let result = 0
  
  if (operation) {

    switch(operation) {
      case 'sum':
        result = arr.reduce((i, total) => i + total)
      break
      case 'multiply':
        result = arr.reduce((i, total) => i * total)
      break
      case 'sub':
        result = arr.reduce((i, total) => i - total)
      break
      case 'divide':
        result = arr.reduce((i, total) => i / total)
      break
    }
  } else {
    console.log('por favor, defina uma operação');
    
  }

  return result
}

// operations([1, 2, 3])
console.log(operations([1, 2, 3, 4], 'sum'))
console.log(operations([1, 2, 3, 4], 'multiply'))
console.log(operations([1, 2, 3, 4], 'sub'))
console.log(operations([1, 2, 3, 4], 'divide'))
