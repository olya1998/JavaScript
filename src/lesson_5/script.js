for (let i = 10; i <= 25; i +=0.5) {
    console.log("i is equal to =", i);
}

const userNumber = prompt("Напишіть будь яке число");
console.log("userNumber =", userNumber);

let isPrime = "prime"; 

for (var i = 2; i < userNumber; i++) {
    if (userNumber % 1 === 0) {
        isPrime = "not prime";
        break;
    }
}

console.log(`${userNumber} is ${isPrime}`);

const userSum = Number(prompt("Яка сума вашої покупки?"));
console.log("userAmount =", userSum);

let discount = 0;

if (userSum <= 0) {
  discount = null;
} else if (userSum < 100) {
  discount = 3;
} else if (userSum < 200) {
  discount = 5;
} else if (userSum >= 200) {
  discount = 7;
} 

 console.log( discount ? `Знижка ${discount}%` : 'Введіть позитивну суму');

var result = '\n';
  for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n';
}

console.log("result =", result);

const USD = 36.76;

for (let i = 10; i <= 100; i +=10) {
    let total = i * USD;
    total = total.toFixed(2);
    total = new Intl.NumberFormat('ru-RU').format(total);
    console.log(`(${i} USD = ${total} UAH)`);
}

let plus = 0;
let minus = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i=1; i < 16; i++) {
  let userNumber = Number(prompt('Введіть 15 чисел'));

  if (userNumber > 0) {
    plus++;

  } else if (userNumber < 0) {
    minus++

  } else {
    zero++;
  }

  if (userNumber % 2 === 0) {
    even++;
  } else {
    odd++;
  } 
}

console.log('позитивних: ' + plus);
console.log('негативних: ' + minus);
console.log('нулеів: ' + zero);
console.log('парне: ' + even);
console.log('непарне: ' + odd);