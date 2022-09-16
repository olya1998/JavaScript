const sum = 0.1 + 0.2;
console.log( sum.toFixed(2) );

const userLogin = prompt("укажите свой логин");
console.log("userLogin =", userLogin );

const userPassword = prompt("введіть свій пароль?");
console.log("userPassword =", userPassword );

if(userLogin !== 'admin' && userPassword !== '12pass33210') {
    console.log('You are not welcome here!');

} else if( userLogin !== 'admin' || userPassword !== '12pass33210') {
    console.log('Your login or password is incorrect');

} else {
    console.log('You are In ADMIN MASTER');

}

const userMany = prompt("Скільки ви маєте грошей?");
console.log("userMany =", userMany );

let potatoes = 'potatoes: 12 UAH';
let watermelon = 'watermelon: 21 UAH';
let carrots = 'carrots: 8 UAH';
let cucumbers = 'cucumbers: 10 UAH';
console.log(potatoes, watermelon, carrots, cucumbers);

const userSelect  = prompt("Що ви хочете придбати?");
console.log("userSelect   =", userSelect  );


let price;
let quantity;
let rest;

switch (userSelect) {
  case 'potatoes':
    price = 12;
    quantity = Math.floor(userMany / price);
    rest = userMany % price;
    
    break;
  case 'watermelon':
    price = 21;
    quantity = Math.floor(userMany / price);
    rest = userMany % price; 

    break;
  case 'cucumbers':
    price = 10;
    quantity = Math.floor(userMany / price);
    rest = userMany % price;

    break;
  case 'carrots':
    price = 8;
    quantity = Math.floor(userMany / price);
    rest = userMany % price;

    break;
  default:
    console.log(`Please write correct prodrct name`);
}

if (quantity > 0) {
    console.log(`За ${ userMany} грн. Ви можете придбати ${quantity} даного продукту. У Вас залишиться ${rest}`);
} else if (userMany < 8) {
    console.log("На жаль, у Вас недостатньо коштів для купівлі хоча б 1 шт. будь-якого продукту");
} else if (quantity < 1) {
    console.log(`У вас недостатньо коштів, для купівлі хоча б 1 шт. ${userSelect}`);
}

const a = Number(prompt("Напишіть чому рівна перша сторона трикутника?"));
console.log("corner1  =", a);
const b = Number(prompt("Напишіть чому рівна друга сторона трикутника"));
console.log("corner2  =", b);
const c = Number(prompt("Напишіть чому рівна третя сторона трикутника"));
console.log("corner3  =", c);

const p = a + b + c;
const S = Math.sqrt(p *( p - a ) * ( p - b ) * ( p - c) / 2);


console.log("square  =", S);
const isTriangle =  S <= 0 ? 'Треугольник не существует' : 'Треугольник существует';

console.log(isTriangle);

console.log(Boolean(2 && 0 && 3 || true && false));

console.log(Boolean(false || " " || 3 && true));

console.log(Boolean(1 && 1000 && '0' || 0 && 'Bob'));

console.log(Boolean(-1 || 0 || 0 && "" || 1010));