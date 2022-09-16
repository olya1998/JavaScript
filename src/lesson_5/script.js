// Вивести в console числа, від 10 до 25 з кроком 0.5 (10 й 25 включно)
// for (let i = 10; i <= 25; i++) {
//     console.log("i is equal to =", i)
// }
// Запитати та зберегти число введене із prompt.
// const userNumber = prompt("Напищіть будь яке число");
// console.log("userNumber =", userNumber);

// Визначати чи це число просте
// let isPrime = "prime" ; 

// for (var i = 2; i < userNumber; i++) {
//     if (userNumber % 1 === 0) {
//         isPrime = "not prime";
//         break;
//     }
// }

// console.log(`${userNumber} is ${isPrime}`);

// Обрахувати знижку та повідомити користувачу значення знижки. Якщо сума покупки до 100 UAН - знижка 3%; якщо сума покупки до 200 UAH - знижка 5%; якщо сума покупки перевищує 200 UAH - знижка 7%
// const userAmount = prompt("Яка сума вашої покупки?");
// console.log("userAmount =", userAmount);



/* Вивести таблицю множення чисел від 2 до 9 у зрозумілому форматі
var result = '\n';
  for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}

console.log("result =", result);
*/

// Умова: один долар коштує 36,76 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. Формат (10 USD = 3 676 UAH)






// Запитати у користувача 15 чисел і обрахувати, скільки серед них додатніх, від’ємних і нулів. Також визначатити кількість парних і непарних. Вивести статистику через console у зрозумілому форматі. *** Достатньо однієї змінної (не 15) для введення чисел користувачем.

//const Numbers = prompt('введіть 15 чисел через пробел');
//console.log("Numbers =", Numbers)

let plus = 0;
let minus = 0;
let zero = 0;

let even = 0;
let odd = 0;


for (let i=1; i < 16; i++) {
  let userNumber = Number(prompt('Введіть 15 чисел')) ;
  if (userNumber > 0) {
    plus++;
  } else if (userNumber < 0) {
    minus++;
  } else {
    zero++;
  }

  if (userNumber % 2 === 0) {
    even++;
  } else {
    odd++;
  }

// Спросить у пользователя 15 чисел и высчитать, сколько среди них положительных, отрицательных и нулей. 
// Также определять количество четных и нечетных. Вывести статистику через console в понятном формате. **

  
}
console.log('положительных: ' + plus);
console.log('negative: ' + minus);
console.log('нуль: ' + zero);

console.log('четное: ' + even);
console.log('нечетное: ' + odd);

 




