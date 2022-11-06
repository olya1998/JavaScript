// Calculator
const btn = document.getElementById('buttons');

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
                setResultValue(a);
            } else  if(a !== null && operation !== null) {
                b = (b === null) ? input : (b + input);
                setResultValue(b);
            } 
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
}); 

// ToDo List
const input = document.getElementById('myInput');

const btnAdd = document.getElementById("add");

const ul = document.createElement('ul');
document.body.append(ul);

btnAdd.addEventListener('click', (e) => {
    const li = document.createElement('li');
    li.innerHTML = input.value;
    ul.append(li);

    input.value = '';
});

