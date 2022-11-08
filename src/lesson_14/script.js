const input = document.querySelector('#year');
const btn1 = document.querySelector('#task_1');

btn1.addEventListener('click', function () {
    const century = Math.trunc((input.value / 100) + 1);

    const pastNumber = century % 10;
    let ends;
    if(pastNumber === 1) {
        ends = 'st';
    } else if(pastNumber === 2) {
        ends = 'nd';
    } else if(pastNumber === 3) {
        ends = 'rd';
    } else {
        ends = 'th';
    }

    const centuryDiv = document.getElementById('century');
    centuryDiv.innerHTML = `It is ${century + ends} century`;
});

function vowelOne(string) {
    const vowels = ['a','A', 'e', 'E', 'i', 'I', 'o', 'O','u', 'U', 'y', 'Y'];
    let resultString = '';

    Array.from(string)
        .forEach(function(char){
            resultString += vowels.includes(char)? '1' : '0';
    });

    return resultString;
}

const btn_2 = document.getElementById('task_2');

btn_2.addEventListener('click', function () {
    const input_2 = document.getElementById('input_2').value;
    const resultDiv_2 = document.getElementById('result_2');

    resultDiv_2.innerHTML = vowelOne(input_2); 
});

function spinWords(sting) {
    sting.trim();

    const words = sting.split(' ');
    const resulArray = [];

    words.forEach(function (word) {
       if(word.length >= 5) {
           const splitString = word.split('');
           const reversed = splitString.reverse();
           word = reversed.join('');
       }
           resulArray.push(word);
    });

     return resulArray.join(' ');
}

const btn_3 = document.getElementById('task_3');

btn_3.addEventListener('click', function () {
    const input_3 = document.getElementById('input_3').value;
    const resultDiv_3 = document.getElementById('result_3');

    resultDiv_3.innerHTML = spinWords(input_3);
});

function highAndLow(string) {
    string.trim();
    const numbers = [];

    const words = string.split(' ');
    words.forEach(function (number) {
        numbers.push(+number)
    });

    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers),
    };
}

const btn_4 = document.getElementById('task_4');

btn_4.addEventListener('click', function () {
    const input_4 = document.getElementById('input_4').value;
    const resultDiv_4 = document.getElementById('result_4');

    const results = highAndLow(input_4)
    resultDiv_4.innerHTML = `min: ${results.min}, max: ${results.max}`;    
});

function createPhoneNumber(arrayOfNumbers) {
    const stringNumber = arrayOfNumbers.join('');
    const code = stringNumber.substring(0, 3);
    const firstPart = stringNumber.substring(3, 6);
    const secondPart = stringNumber.substring(6, 10);

    return `(${code}) ${firstPart}-${secondPart}`;
}

const btn_5 = document.getElementById('task_5');

btn_5.addEventListener('click', function () {
    const input_5 = document.getElementById('input_5').value;
    const resultDiv_5 = document.getElementById('result_5');

    const numbers = input_5.split(' ');

    resultDiv_5.innerHTML = createPhoneNumber(numbers);   
});
