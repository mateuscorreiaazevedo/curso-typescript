"use strict";
const showCoords = (obj) => {
    const { x, y, z } = obj;
    console.log(`X: ${x} \nY: ${y} \nZ: ${z}`);
};
showCoords({ x: 1, y: 2, z: 3 });
