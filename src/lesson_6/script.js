function minimum (a, b, c, d) {
  if(! Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c) || !Number.isInteger(d)) {
      console.log('input parameters are invalid');
      return;
  }   

  let minVal = a;
  if (minVal > b) {
    minVal = b;
  } 
    if (minVal > c) {
    minVal = c;
  } 
    if (minVal > d) {
    minVal = d;
  }

<<<<<<< HEAD
// Написати функцію, яка приймає 2 аргументи та шукає найбільший спільний дільник для них. Якщо такого числа немає, то повідомляти про відсутність

// Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне
//function thePerfect(number) {

/*function minimum (a, b, c, d) {
 let minVal = a;
 if (minVal > b) {
  minVal = b;
 } 
  if (minVal > c) {
  minVal = c;
 } 
  if (minVal > d) {
  minVal = d;
 }

 return minVal;
=======
  return minVal;
>>>>>>> lesson_6
} 

function minDivider(m, n) {	
   if(! Number.isInteger(m) || !Number.isInteger(n)) {
      console.log('input parameters are invalid');
      return;
   }

  const min = m < n ? m : n;	

  for(let i = min; i >= 2; i--) {

    if(m % i == 0 && n % i == 0) {
      return i;
    }
  }

  return  'no divider :( ';
}

function isPerfect(number) {
  if(! Number.isInteger(number)) {
    console.log('input parameter is invalid');
    return;
 }

<<<<<<< HEAD


// Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне
/*function thePerfect(number) {
    let temp = 0;
        for(var i=1;i<=number/2;i++)
        {
        if(number%i === 0)
          {
            temp += i;
          }
     }
=======
  let temp = 0;
  for(let i = 1;i <= number / 2; i++) {
  if(number % i === 0){
      temp += i;
    }
  }
>>>>>>> lesson_6
   
  if(temp === number && temp !== 0){
    return number + " is a perfect number.";
  } else {
    return "sorry, it is NOT a perfet number";
  }
  // TODO:: idialy this function should return Boolean
  // following  S (single responsibility) form SOLID 
 } 
<<<<<<< HEAD
thePerfect(28); 
*/
// Написати функцію, яка приймає 2 аргументи та обраховує суму в цьому проміжку. Зверніть увагу, що можна передати 10 та -2, як аргументи. Суму всіх чисел в цьому проміжку також треба обчислити

// Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
   var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.' ;
    console.log(message);
}
cToF(60);


=======
>>>>>>> lesson_6

function range (a, b) {
  if(! Number.isInteger(a) || !Number.isInteger(b)) {
      console.log('Не правільні параметри');
      return;
  }

  let min;
  let max;
  if (a == b) {
    return a;
  } else if (a > b) {
     min = b;
     max = a;
  } else {
     min = a;
     max = b;
  }

  let rangeSum = 0;
  for (let i = min; i <= max; i++) {
    rangeSum += i;
  }
  return rangeSum;
  
}

function cToF(celsius) {
  if (! Number.isInteger(celsius)) {
    console.log('Не правільний параметр');
    return;
  }
  const fahrenheit = celsius * 9 / 5 + 32;

  return celsius + '\xB0C is ' + fahrenheit + ' \xB0F.' ;
}

function getRandomInt(min, max) {
  if(! Number.isInteger(min) || !Number.isInteger(max)) {
    console.log('Не правільні параметри');
    return;
 }

<<<<<<< HEAD
// Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    
}

getRandomInt(0, 40);



/*function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  
}

console.log('getRandomInt =', getRandomInt(0, 40));   
*/
=======
  return Math.floor(Math.random() * (max - min)) + min;
}
>>>>>>> lesson_6
