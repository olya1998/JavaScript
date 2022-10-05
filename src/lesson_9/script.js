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

// 2.

function MyStudent(name, age, course, speciality, city) {
  this.name = name;
  this.age = age;
  this.course = course;
  this.speciality = speciality;// где?
  this.city = city;
}

const student= new MyStudent('Olya', 24, 6, 'doctor', 'Kharkiv');

// const info = function (city) {
//   console.log(`My name is ${this.name}, I am ${this.age} years old, I'm stading for the ${this.course} to the ${this.speciality}, in the town ${city}`);
// } 

// const bound = info.bind(student, 'Kharkiv');
//bound()

MyStudent.prototype.myOwnBind = function() {   
  console.log(`My name is ${this.name}, I am ${this.age} years old, I'm stading for the ${this.course} to the ${this.speciality}, in the town ${this.city}`);
}
//  получается этого не хватает, делаем по примеру из урока тогда 

function megaGreeting(name, age = 24, course = 6, speciality = 'doctor', city = 'Kharkiv') {
  // ...
 // MyStudent.bind(this, name);
  MyStudent.call(this, name, age, course, speciality, city);
//   Сделать Баннд  - посмотреть как правильно задавать параметры, тут или уже при вызове на месте 
}

megaGreeting.prototype = Object.create(MyStudent.prototype);

const testStudent = new megaGreeting('Alex');

const nextStudent = new megaGreeting('Peter', 21, 3, 'developer');


//const newBound = student.myOwnBind();  
//newBound();

 testStudent.myOwnBind();

nextStudent.myOwnBind();



// 3.Cоздать функцию, принимающую 2 параметра – объекты. Функция должна проверять, абсолютно ли эти 2 объекта идентичны и возвращает результат в понятном формате.

// function myParameters(name, age) {
//   name = 'Olya';
//   age = 24; 
// };




// 4.Создайте функцию-конструктор Calculator, создающий объекты с тремя методами:
// - enterData – запрашивает два значения с помощью prompt и запоминает их в свойствах объекта.
// - calculateSum() возвращает сумму этих свойств.
// - calculateNSD() возвращает результат поиска НДД
// - calculateNSK() возвращает результат поиска НСК

// function Calculator() {
//   this.enterData = function () {
//     this.value = +prompt('value?');
//   };
// }




// this.enterData = enterData;
// this.calculateSum = calculateSum; 
// this.calculateNSD = calculateNSD;
// this.calculateNSK = calculateNSK;