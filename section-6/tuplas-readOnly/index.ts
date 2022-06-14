// tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0], numbers[1]);
}

showNumbers([1,123])