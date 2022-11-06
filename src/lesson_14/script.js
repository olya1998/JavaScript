// Вирішити алгоритмічні задачки
// Всі дані для тесту задачок отримувати через input-поля з HTML
// Біля кожного input-поля кнопка "Вирішити задачу 1" (2,3,4)

/*
1) Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation. 
   Возвращает век введенного года. Ввод всегда будет строкой из 4 цифр, поэтому проверка не требуется.


"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
*/

const input = document.querySelector('#year');
const btn1 = document.querySelector('#task_1');

btn1.addEventListener('click', function () {
    
    const century = Math.trunc((input.value / 100) + 1);

    const pastNumber = century % 10;
    let ends;
    if(pastNumber ===1 ) {
        ends = 'st';
    } else if(pastNumber === 2) {
        ends = 'nd';
    } else if(pastNumber === 3) {
        ends = 'rd'
    } else {
        ends = 'th'
    }
    console.log(century + ends);

});
/*
2) Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's. All non-vowels including non alpha characters (spaces,commas etc.) should be included.
Напишите функцию, которая принимает строку и выводит строки из 1 и 0, где гласные становятся 1, а не гласные — 0. Должны быть включены все негласные, включая небуквенные символы (пробелы, запятые и т. д.).

vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
*/

/*
3) Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми словами из пяти или более букв. Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

/*
4) You are given a string of space separated numbers, and have to return the highest and lowest number.
Вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

/*
5) Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), которая возвращает строку этих чисел в виде номера телефона.

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/