"use strict";
// variável em um if
// checando se valor existe
const operations = (arr, operation) => {
    if (operation) {
        let result = 0;
        switch (operation) {
            case 'sum':
                result = arr.reduce((i, total) => i + total);
                console.log(result);
                break;
            case 'multiply':
                result = arr.reduce((i, total) => i * total);
                console.log(result);
                break;
            case 'sub':
                result = arr.reduce((i, total) => i - total);
                console.log(result);
                break;
            case 'divide':
                result = arr.reduce((i, total) => i / total);
                console.log(result);
                break;
        }
    }
    else {
        console.log('por favor, defina uma operação');
    }
};
// operations([1, 2, 3])
operations([1, 2, 3, 4], 'sum');
operations([1, 2, 3, 4], 'multiply');
operations([1, 2, 3, 4], 'sub');
operations([1, 2, 3, 4], 'divide');
