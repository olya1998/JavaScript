function arrayCreate () 
{
    const arrayLength = Number(prompt('яка довжина масива?'));
    if(arrayLength > 0) {
        let element;
        const newArray = [];

        for(let i = 1; i <= arrayLength; i++) {
            element = prompt('what should be inside this element?');
            newArray.push(element);
        }

        return newArray;
    } else {
        console.log('wrong parameter :(');
    }
}

const someNumbers = [4, 5, 10, -3, 9, 1, 24];
someNumbers.sort(function(num_1, num_2) {
    return num_1 - num_2;
});

const shoppingList = [
    {
        productName: 'bread',
        productPrice: 14.5,
        productQuantity: 2
    },
    {
        productName: 'milk',
        productPrice: 25,
        productQuantity: 2
    },
    {
        productName: 'cucumber',
        productPrice: 7,
        productQuantity: 25
    },
    {
        productName: 'oil',
        productPrice: 32,
        productQuantity: 4
    },
    {
        productName: 'salt',
        productPrice: 13,
        productQuantity: 8
    },
    {
        productName: 'meat',
        productPrice: 92.8,
        productQuantity: 1
    },
];

const calculatorPrice = shoppingList.reduce(function(prev, cur) {
    return prev + cur.productPrice;
  }, 0);

function getMinQuantity(shoppingList)
{
    if( Array.isArray(shoppingList) && shoppingList.length > 0) {
       
        let min = shoppingList[0].productQuantity;
        for (let i = 0; i < shoppingList.length; i++) {

            if(shoppingList[i].productQuantity < min) {
                min = shoppingList[i].productQuantity;
            }
        }

        return min;
    }
}

const numberProducts = shoppingList.reduce(function(prev, cur) {
    return prev + cur.productQuantity;
  }, 0);

function getMostExpensive(shoppingList)
{
    if( Array.isArray(shoppingList) && shoppingList.length > 0) {
       
        let max = shoppingList[0].productPrice;
        for (let i = 0; i < shoppingList.length; i++) {

            if(shoppingList[i].productPrice > max) {
                max = shoppingList[i].productPrice;
            }
        }

        return max;
    }
}

function addItem(shoppingList) 
{
    if(Array.isArray(shoppingList)) {
        let productName = prompt('Введіть назву продукта');
        let productPrice = Number(prompt('Введіть ціну продукта'));
        let productQuantity = Number(prompt('Введіть кількість продукту'));

        if(productName.length > 1 && productPrice > 0 && productQuantity >= 0) {
            const newProduct = 
            {
                productName: productName,
                productPrice: productPrice,
                productQuantity: productQuantity,
            };

            shoppingList.push(newProduct);

            return shoppingList;
        } else {
            console.log('Please, fill the right values!');
        }

    } else {
        console.log('Input param is not an Array');
    } 
}

function deleteItem(shoppingList) 
{
    if(! Array.isArray(shoppingList) || shoppingList.length <= 0 ) {
        console.log('Input param is not an Array Or Empty');
        return;
    }

const deleteProduct = prompt('Введіть назву продукта, який хочете видалити');
 
    for (var i = 0; i <= shoppingList.length; i++) {
        if (shoppingList[i].productName == deleteProduct) {
            shoppingList.splice(i, 1);
    
            return shoppingList;
        }
    }
    console.log("Product Not Found");
}

const newNumbers = [16, -3, 54, -4, 72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35];

function getPositives(newNumbers)
{
    if(! Array.isArray(newNumbers) || newNumbers.length <= 0 ) {
        console.log('Input param is not an Array Or Empty');
        return;
    }

    let positive = 0;
    const result = newNumbers.reduce(function(sum, elem) {
        if (elem >= 0) {
            positive++;

            return sum + elem;
        } else {
            return sum;
        }
    });

    return {
        positiveSum: result,
        positiveCount: positive
    };
}

function getMinimum(newNumbers) 
{
    if(! Array.isArray(newNumbers) || newNumbers.length <= 0 ) {
        console.log('Input param is not an Array Or Empty');
        return;
    }

    const min =  Math.min(...newNumbers);
    const index = newNumbers.indexOf(min);

    return {
        minNumber: min,
        minIndex: index
    };
}

function getMaximum(newNumbers)
{
    if(! Array.isArray(newNumbers) || newNumbers.length <= 0 ) {
        console.log('Input param is not an Array Or Empty');
        return;
    }
    
    const max =  Math.max(...newNumbers);
    const index = newNumbers.indexOf(max);

    return {
        maxNumber: max,
        maxIndex: index
    };
}

function getNegative(newNumbers) 
{
    if(! Array.isArray(newNumbers) || newNumbers.length <= 0 ) {
        console.log('Input param is not an Array Or Empty');
        return;
    }

    const negative = newNumbers.filter(function (value) {
        return value < 0;
    });

    return negative.length;
}

function getOddCount(newNumbers) {
    if(! Array.isArray(newNumbers) || newNumbers.length <= 0 ) {
        console.log('Input param is not an Array Or Empty');
        return;
    }

    const positive = newNumbers.filter(function(character) {
        return character > 0 && character % 2 !== 0;
    });

    return positive.length;
}

function getEvenSum(newNumbers) {
    if(! Array.isArray(newNumbers) || newNumbers.length <= 0 ) {
        console.log('Input param is not an Array Or Empty');
        return;
    }

    const positive = newNumbers.filter(function (numer) {
        return numer > 0 && numer % 2 === 0;
    });
    
    const sum = positive.reduce(function(sum, e) {
        return sum + e;
    }, 0);

    return sum;
}
    
function  multiplyPositiveNumbers(newNumbers) {
    if(! Array.isArray(newNumbers) || newNumbers.length <= 0 ) {
        console.log('Input param is not an Array Or Empty');
        return;
    }

    const positive = newNumbers.filter(function(value) {
        return value > 0;
    });
    
    const sum = positive.reduce(function(sum, e) {
        return sum * e;
    });

    return sum;
}