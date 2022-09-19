
const FirstName = prompt("What's your name?");
console.log("FirstName =", FirstName );

const surname = prompt("what is your surname?");
console.log("surname  =", surname );

const number = prompt("Яке твоє улюблене число?");
console.log("number  =", number );

const data = `Привіт ${ FirstName} ${surname} ! Ваше улюблене число -  ${ number}`; 
console.log("data =", data);

const first = Number(prompt("Введіть перше число?"));
console.log("first =", first );

const second= Number(prompt("Введіть друге число?"));
console.log("second =", second);

console.log("Summ =", first + second);

console.log("subtract =", first - second);

console.log("multiply =", first * second);

console.log("divide =", first / second);


const year = prompt("В якому році Ви народились?");
console.log("year =", year );

let now = new Date(2022);
const age = `${now - year}`; 
console.log("age =", age);

const a = 45;
const b = 6;
console.log('Остача від ділення числа ' + a + ' на число ' + b + ' рівна ' + a % b); 

const isOdd = 99 % 2 === 0 ? 'odd' : 'even';
console.log(isOdd);



