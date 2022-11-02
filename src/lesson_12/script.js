// Створити калькулятор, як приклад у прикріпленому відео

// Не обов'язково ідеально повинен бути той самий дизайн, стилі, ефекти, тощо. Головне - функіонал. Стилі та ефекти - на власний смак та розсуд

// Функціонал повинен бути зрозумілим та робочим

// Кнопки % та +/- НЕ ПОТРІБНО додавати


// Ділення на 0 або інші математично не правильні операції - закінчуватись повідомленням - Not a number, або Error: Invalid operation

// Кнопка АС - затирає вміст на екрані вводу

const btn = document.getElementById('buttons');
// вот это можно в функцию закинуть - будем переиспользовать
let a;
let operation;
let b;
const resultDiv = document.getElementById('result');

function reset () {
   a = null;
   operation = null;
   b = null;
   setResultValue(0);
}

function setResultValue(value) {
    resultDiv.innerHTML = value;
}

function calculateResult(a, b, operation) {
    // as soon using eval() - is NOT safe - I'm using such approach
    const formula = `return ${+a} ${operation} ${+b}`;

    const F = new Function (formula);

    const result = (F());
    
    return typeof result === 'number' ? result : 0;
}


reset();

 btn.addEventListener('click', function (event) {
     const input = event.target.textContent;
     const classList = event.target.classList;

     if(classList.contains('ac')) {
        reset();
     } else if(classList.contains('number')) {
        if(typeof +input === 'number') {
            if(operation === null ) { 
                a = (a === null) ? input : (a + input);
            } else  if(a !== null && operation !== null) {
                b = (b === null) ? input : (b + input);

            } 
            setResultValue(a);

        }

    } else if (classList.contains('operation') || classList.contains('equal')) {
        if(a !== null) {
            if(b !== null && operation !== null) { 
                a = calculateResult(a, b, operation);

                if(typeof a !== 'number' || a === Infinity) {
                    alert('Error: Invalid operation');
                    reset();
                    return;
                }
                setResultValue(a);
                b = null;
            }
            if(! classList.contains('equal')) {
                operation = input;
            }
            
        }
    }  



// 4)если операция и число заполнено - Переменную А приводим к Числу 
// 5)если следующий ввод - операция - меняем переменную  Operation
// 6)если после переменной А и Operation вводим число - набираем переменную B 
// 7)если следующий ввод - Операция - вначале выполням формулу(считаем и результат запиываем в переменную А) и продолжаем с пункта 5

// если просто Равно - считаем как в шаге 7, и ждём операцию, если на вводе число - тогда перезаписываем переменную А
// если AC просто всё в null 




 }); 

 


 



// Створити ToDo List, як на прикладі у прикліпленому відео

// Кожен елемент - додається при кліку на кнопку

// Стилі та ефекти - на власний смак та розсуl

