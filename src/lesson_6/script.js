//Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них


// Написати функцію, яка приймає 2 аргументи та шукає найбільший спільний дільник для них. Якщо такого числа немає, то повідомляти про відсутність

// Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне
function thePerfect(number) {
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


// Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    
}

getRandomInt(0, 40);