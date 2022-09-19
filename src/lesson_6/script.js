//Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них


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
} 

const miniNumber = minimum(10, 5, -1, 12);

console.log(miniNumber);
*/



// Написать функцию, которая принимает 2 аргумента и ищет наибольший общий делитель для них. Если такого числа нет, то сообщать об отсутствии


function minDivider(m, n) {	
  const min = m < n ? m : n;	

  for(let i = min; i >= 2; i--) {

    if(m % i == 0 && n % i == 0) {
      return i;
    }
  }

  return  'no divider :( ';
}








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
   
     if(temp === number && temp !== 0)
        {
        console.log("The perfect number.");
        }  
 } 
thePerfect(28); 
*/

// Написать функцию, которая принимает 2 аргумента и рассчитывает сумму в этом промежутке. Обратите внимание, что можно передать 10 и (-2 в качестве аргументов. Сумму всех чисел в этом промежутке также следует вычислить

/*function range (a, b) {
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

const summa = range(10, -2);

console.log(summa);
*/

// console.log('summ on range is: ', range(10, -2)); 

// range(10, -2);



// Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт
/*function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
   const message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.' ;
    console.log(message);
}
cToF(60);
*/


// Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40



/*function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  
}

console.log('getRandomInt =', getRandomInt(0, 40));   
*/