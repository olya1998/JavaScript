// 1. Створити масив, довжину та елементи якого задає користувач (через prompt).



function arrayCreate () {
    const arrayLength = Number(prompt('яка довжина масива?'));
    if(arrayLength > 0) {
        let element;
        const newArray = [];
        for(let i = 1; i <= arrayLength; i++) {
            // спросить у пользователя - что поместить в этот элемент
            element = prompt('what should be inside this element?');
            // добавить что он ввел в массив 
            newArray.push(element);
            
        }      
        return newArray;
    } else {
        console.log('wrong parameter :(');
    }

}



// 2. Відсортувати масив за зростанням.??
const someNumbers = [4, 5, 10, -3, 9, 1, 24];
someNumbers.sort(function(num_1, num_2) {
    return num_1 - num_2
});





// 3. Дано масив - список покупок. Кожен елемент масиву - це обʼєкт вигляду: {productName: 'bread', productPrice: 14.5, productQuantity: 2}. Мінімальний довжина такого масиву - 6 
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

// - Порахувати загальну вартість корзини та вивести суму у зрозумілому форматі
const calculatorPrice = shoppingList.reduce(function(prev, cur) {
    return prev + cur.productPrice;
  }, 0);

// - Порахувати найменшу кількість продукту, який потрібно купити
function getMinQuantity(shoppingList)
{
    if( Array.isArray(shoppingList) && shoppingList.length > 0) {  // проверили что это массив и что размер >
       
        let min = shoppingList[0].productQuantity; // тут делаем иначе, берём первый элемент(объект) его свойство productQuantity, как
        for (let i = 0; i < shoppingList.length; i++) {

            if(shoppingList[i].productQuantity < min) {
                // тут перебиваем ту, что создали выше, если условие выполнено 
                min = shoppingList[i].productQuantity;  // это значит перебить или переопределить переменную 
            }
        }

        return min;
    }
}


// - Порахувати загальну кількість продуктів
const numberProducts = shoppingList.reduce(function(prev, cur) {
    return prev + cur.productQuantity;
  }, 0);

// - Знайти найдорожчий продукт for (let index = 0; index < ary.length; index++)

function getMostExpensive(shoppingList)
{
    if( Array.isArray(shoppingList) && shoppingList.length > 0) {  // проверили что это массив и что размер >
       
        let max = shoppingList[0].productPrice; // тут делаем иначе, берём первый элемент(объект) его свойство productQuantity, как
        for (let i = 0; i < shoppingList.length; i++) {

            if(shoppingList[i].productPrice > max) {
                // тут перебиваем ту, что создали выше, если условие выполнено 
                max = shoppingList[i].productPrice;  // это значит перебить или переопределить переменную 
            }
        }

        return max;
    }
}



// - Створити функцію, яка повинна додавати новий продукт в існуючий масив
// - Дані про новий продукт - користувач вводить із prompt

function addItem(shoppingList) {
    // любимая валидация) love))))

    // проверить что массив 
    if(Array.isArray(shoppingList)) {
        let isError = false;  // ?????
        let productName = prompt('Введіть назву продукта'); // после этого
        let productPrice = Number(prompt('Введіть ціну продукта'));// после этого
        let productQuantity = Number(prompt('Введіть кількість продукту'));// после этого

        if(productName.length > 1 && productPrice > 0 && productQuantity >= 0) {
            const newProduct =    {
                productName: productName, 
                productPrice: productPrice, 
                productQuantity: productQuantity,
            }
            // добавить в массив
            shoppingList.push(newProduct);
            //вернуть итоговоый массив
            return shoppingList;
        } else {
            console.log('Please, fill the right values!');
        }

    } else {
        console.log('Input param is not an Array');
    } 
}

// - Створити функцію, яка повинна видаляти конкретний продукт із існуючий масиву продуктів
function deleteItem(shoppingList) {
    if(! Array.isArray(shoppingList) || shoppingList.length <= 0 ) {
        console.log('Input param is not an Array Or Empty');
        return;
    }


    // спросить у пользователя название продукта - по которому удалять объект 
    const deleteProduct = prompt('Введіть назву продукта, який хочете видалити');
     
    // Найти элемент в массиве - нужен индекс 
    for (var i = 0; i <= shoppingList.length; i++) {
    
        if (shoppingList[i].productName == deleteProduct) {
            
            shoppingList.splice(i, 1);
            
            return shoppingList;
        }
    }
    
    console.log("Product Not Found");
}

// - Дані про видалення такого продукту - користувач вводить із prompt лише назву



//4. Дано масив [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35]
const newNumbers = [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35];

//- Знайти суму та кількість позитивних елементів.

//- Знайти мінімальний елемент масиву та його порядковий номер.

//- Знайти максимальний елемент масиву та його порядковий номер.

//- Визначити кількість негативних елементів.

//- Знайти кількість непарних позитивних елементів.

//- Знайти суму парних позитивних елементів.

//- Знайти добуток позитивних елементів.
