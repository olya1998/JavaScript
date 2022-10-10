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
const Man = new CreateHuman('Oleh', 25, 'female', 'Ukranian', 'Ukraine', ['Spain', 'Egypt', 'Israel'], 8, 22);

const greeting = function (name, age, country) {
    console.log(`My name is ${this.name}, I am ${this.age} years old, I'm from ${this.country}`);
    console.log(`Ah and my name is ${name}, I am ${age} years old, I'm from ${country}`);
};

const getUp = function (name, timeOn) {
  console.log(`Wake Up dear ${this.name}, it is ${timeOn} already`);
  console.log(`Oh, thanks ${name}, I'm usually wake up at ${this.timeOn}, but today is different`);
};

const goToSleep = function (name, timeOff) {
  console.log(`Hey ${name}, it is ${this.timeOff} already. are you going to go to sleep?`);
  console.log(`Oh, realy? Yeah, thanks ${this.name}, I'm usually go to sleep at ${timeOff}, but today it is time`);
};

const travelCountry = function (name, travelList) {
  console.log(`my name ${this.name}, I would like to visit ${this.travelList.join(', and then ')}`);  
  console.log(`Oh, my name ${name} and I would like to visit ${travelList.join(', and then ')}`); 
};

greeting.apply(Feman, ['Petr', 15, 'USA']);
greeting.apply(Man, ['Adam', 35, 'Ukraine']);

getUp.apply(Feman, ['Oleh',7]);
getUp.apply(Man, ['Ivan',9]);

goToSleep.apply(Feman, ['Oleh',21]);
goToSleep.apply(Man, ['Kate',21]);

travelCountry.apply(Feman, ['Kate', ['Canada', 'USA', 'Spain']]);
travelCountry.apply(Man, ['Maria', ['USA', 'Canada', 'Ukraine']]);

// Mybind
const person = {
  name: 'Olga'
};

function info(phone, email) {
  console.log(`name: ${this.name}, phone: ${phone}, email: ${email}`);
}

const MyBind = function(context, ...rest) {
  return function(...args) {
    console.log('my ' + context.name + ' params are: ' + rest.concat(args).join(', and '));
  };
};

Function.prototype.myBestBind = MyBind;

info.myBestBind(person)('8094152392', 'olbga99@.com');

const firstObj = {
  name: 'Olya',
  age: 24,
};
const secondObj = {
  name: 'Olya',
  age: 24,
};

 function areObjectsEqual(objectOne, objectTwo) { 
  if(typeof objectOne === 'object' && typeof objectTwo === 'object') {
    const isEqual = JSON.stringify(objectOne) === JSON.stringify(objectTwo);

    if(isEqual) {
      console.log('Objects are equal');
    } else {
      console.log('Objects are not equal');
    }

  } else {
    console.log('First or second param is not an object');
  }
}

// Calculatore

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

let calculator = new Calculator();
calculator.enterData();
