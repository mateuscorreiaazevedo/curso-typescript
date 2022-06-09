// Array<number>

const nums: Array<number> = [1, 2, 3, 4]

nums.push(5)

const filtro = nums.filter(num => {
  return num % 2 != 0
})


console.log(filtro);
