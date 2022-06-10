interface Point {
  x: number
  y: number
  z: number
}

const showCoords = (obj: Point) => {
  const {x, y , z} = obj
  console.log(
    `X: ${x} \nY: ${y} \nZ: ${z}`
  );
}
showCoords({x: 1, y: 2, z: 3})