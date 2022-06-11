const sumAll = (...numbers: number[]) => {
  return numbers.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5));
