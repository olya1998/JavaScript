// 1.Создать функцию-конструктор Человека. Свойства, которые будут описывать экземпляр Человека – имя, возраст, пол, национальность, страна, список стран для путешествий.
// Создать универсальные функции – 
//знакомство, (+)
//просыпаться, (+)
//засыпать -- next
//и список стран, которые Человек хочет посетить. Работу этих функций можно выводить через console.log. Но в каждой из функций должно использоваться как можно больше характеристик конкретного Человека, на котором эта функция вызывается (подсказка: здесь нужно использовать call/apply/bind)

function CreateHuman(name, age, gender, nationality, country, travelList, timeOn = 8, timeOff = 22) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
    this.country = country;
    this.travelList = travelList;
    this.timeOn = timeOn;
    this.timeOff = timeOff;
}

const Feman = new CreateHuman('Olya', 24, 'female', 'Ukranian', 'Ukraine', ['Spain', 'Egypt', 'Israel']);
const Man = new CreateHuman('Oleh', 25, 'female', 'Ukranian', 'Ukraine', ['Spain', 'Egypt', 'Israel'], 10, 24);


const greeting = function (name, age, country) {
    console.log(`My name is ${this.name}, I am ${this.age} years old, I'm from ${this.country}`);
    console.log(`Ah and my name is ${name}, I am ${age} years old, I'm from ${country}`);
} 

const getUp = function (name, timeOn) {
  console.log(`Wake Up dear ${this.name}, it is ${timeOn} already`);
  console.log(`Oh, thanks ${name}, I'm usually wake up at ${this.timeOn}, but today is different`);
}

const goToSleep = function (name, timeOff) {
  console.log(`Hey ${name}, it is ${this.timeOff} already. are you going to go to sleep?`);
  console.log(`Oh, realy? Yeah, thanks ${this.name}, I'm usually go to sleep at ${timeOff}, but today it is time`);
}

const travelCountry = function (name, travelList) {
  console.log(`my name ${this.name}, I would like to visit ${this.travelList.join(', and then ')}`);  
  console.log(`Oh, my name ${name} and I would like to visit ${travelList.join(', and then ')}`); 
}

// travelCountry.apply(Feman, ['Kate', ['Canada', 'USA', 'Spain']]);
// travelCountry.apply(Man, ['Maria', 'USA']);

// greeting.apply(Feman, ['Petia', 15, 'USA']);
// greeting.apply(Man, ['Adam', 35, 'Ukraine']);

// getUp.apply(Feman, ['Oleh',7]);
// getUp.apply(Man, ['Ivan',9]);

// goToSleep.apply(Feman, ['Oleh',21]);
// goToSleep.apply(Man, ['Kate',22]);



//--


//--------------

// const greet = function (param1, param2, param3) {
//     console.log(this.name, this.age);
//     console.log(param1, param2, param3);
//   };
  
//   const me = {
//     name: 'Ros',
//     age: 28,
//   };
  
//   const me2 = {
//     name: 'Oleh',
//     age: 30,
//   };
  
//   const me3 = {
//     name: 'Roman',
//     age: 27,
//   };
  

  

  
  //greet.apply(me, [10, 20, 30]);
  //greet.apply(me2, [100, 99, 101]);
  //greet.apply(me3, ['smth', true, {}]);
  
  //greet.call(me, 10, 20, 50);
  //greet.call(me2, 'sfsd', true, {});
  // const callRes = greet.call(me3, true, true, null); // undefined
  
  // const bound = greet.bind(me3, -10, -20, -30);
  




// 2.Создать собственную реализацию метода .bind (подсказка: в конце надо поместить эту собственную функцию в прототип - Function.prototype.myOwnBind = function() { [здесь_код_кастомного_bind] }
// 1.
/*
const myStudent = {
  name: 'Olya',
  age: 24,
  course: 6,
  speciality: 'medical',
  city: 'Kharkiv'
};

function info() {
  console.log(`My name is ${this.name}, I am ${age} years old, I'm stading for the ${this.course} to the ${this.speciality}, in the town ${this.city}`)
}


const bound = info.bind(myStudent, Olya);
bound();
*/

// 2. Function.prototype.myOwnBind = function () { [тут_код_кастомного_bind] }

const person = {
  name: 'Olga'
}

function info(phone, email) {
  console.log(`  name: ${this.name}, phone: ${phone}, email: ${email}`);
}

//Demo
// info.bind(person)('1234567', 'e@m.com');
// info.bind(person, '123456')('e@m.com');
// info.bind(person, '12345678', 'e@m.com')(); // !!

// function bind(funct, context, ...rest) {
//   return funct.bind(context, ...rest);
// }

// function bind(func, context, ...rest) {
//   return function( ...args) {
//     const uniqId = Date.now().toString();
//     context[uniqId] = func;
//     const result = context[uniqId](...rest.concat(args));
//     delete context[uniqId]

//     return result;
//   }
// }
const MyBind = function(context, ...rest) {
  return function(...args) {
    console.log('my ' + context.name +' params are: ' + rest.concat(args).join(', and '));
  }
}

Function.prototype.myBestBind = MyBind;



// прояснить !
//Cat.prototype = Object.create(Function.prototype)


info.myBestBind(person)('1234567', 'e@m.com');
// myBestBind(info, person, '123456')('e@m.com');
// myBestBind(info, person, '12345678', 'e@m.com')(); 



// 3.Cоздать функцию, принимающую 2 параметра – объекты. Функция должна проверять, абсолютно ли эти 2 объекта идентичны и возвращает результат в понятном формате.


const firstObj = {
  name: 'Olya',
  age: 25,
};
const secondObj = {
  name: 'Olya',
  age: 24,
};

 function myParameters(obkectOne, objectTwo) {
  // валидация сто первый и второй параметры -объекты


  return isEqual = JSON.stringify(obkectOne) === JSON.stringify(objectTwo);
 }

console.log(myParameters(firstObj, secondObj));


 const first = {
     name: 'Olya',
     age: 24
 };

 const second = {
     name: 'Olya',
     age: 24
 };

 for (let key in first) {
   console.log(first[key]);
 }

 for (let key in second) {
   console.log(second[key]);
 }


//  function userData () {
//   const user = {
//       login: null,
//       password: null,
//       city: null,
//       country: null,
//       gender: null,
//       age: null,
//   };
//   let value;

//   for (let key in user) {
//       value = prompt('enter your' + key);

//       if(typeof value === 'string' && value.length > 0){
//           if(key === 'age') {
//               value = Number(value);
//           }
//           user[key] = value;
//       }
//   }

//   return user;
// }

// 4.Создайте функцию-конструктор Calculator, создающий объекты с тремя методами:
// - enterData – запрашивает два значения с помощью prompt и запоминает их в свойствах объекта.
// - calculateSum() возвращает сумму этих свойств.
// - calculateNSD() возвращает результат поиска НДД
// - calculateNSK() возвращает результат поиска НСК


// function Calculator() {
//   this.enterData = enterData;
//   this.calculateSum = calculateSum; 
//   this.calculateNSD = calculateNSD;
//   this.calculateNSK = calculateNSK;
//  }

// // const calculator = new Calculator() {
// // }

// function enterData() {
//   const first = +prompt('Напишіть перше значення');
//   const second = +prompt('Напишіть друге значення');
//   this.a = first;
//   this.b = second;
// }
/*
function Calculator() {

  this.enterData = function() {
    this.firstNumber = +prompt('Напишіть перше значення');
    this.secondNumber = +prompt('Напишіть друге значення');
  };

  this.calculateSum = function() {
    return this.firstNumber + this.secondNumber;
  };

  this.calculateNSD = function() {
    return this.firstNumber / this.secondNumber;
  };
  this.calculateNSK = function() {
    return this.firstNumber * this.secondNumber;
  };
}
// числа 5 и 18 NSD=1, NSK=90;
let calculator = new Calculator();
calculator.enterData();

// enterData.apply(calculator);
// calculator.calculateSum();

console.log( "calculateSum=" + calculator.calculateSum() );
console.log( "calculateNSD=" + calculator.calculateNSD());
console.log( "calculateNSK=" + calculator.calculateNSK());
*/