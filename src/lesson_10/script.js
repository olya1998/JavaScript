// Homework 10

// Реалізувати фунцію-конструктор Автомобіля.
function Car(startTripe, finishTripe, expenditure, engineType, engineVolume, model, year, weight, operability = 100) {
    this.startTripe = startTripe;
    this.finishTripe =  finishTripe;
    this.expenditure  = expenditure;
    this.engineType =  engineType;
    this.engineVolume = engineVolume;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.operability = operability;
    this.isOnTheWay = false; // by default - can can be used = free
}

Car.prototype.start = function () {
    // проверить что машина не занята 
    if(this.isOnTheWay === false) {
        //змінюють ці статуси у конкретного екземпляра
        this.isOnTheWay = true;


        console.log('lets go')
    } else {
        console.log('sorry, I am busy')
    }
   
};

  
Car.prototype.finish = function () {
   
    if(this.isOnTheWay === true) {
        if(this.operability <= 0) {
            console.log('sorry, I need to repair my car');
            return;
        }
        this.isOnTheWay = false;

        const min = 0.1;
        const max = 2.5;
        const randomDamage = (Math.random() * (max - min) + min).toFixed(4);

        this.operability = +Number.parseFloat(this.operability - randomDamage).toFixed(2);
        // Number.parseFloat(4 - 0.6).toFixed(2);

        console.log('stop');
    } else {
        console.log('Hmm, no problem:)');
    }
};

// Можливості автомобіля - почати поїздку, закінчити поїздку

// Реалізувати 3 фунції-конструктори - Хетчбек, Універсал, Седан. Їхнім прототипом - має бути Автомобіль та його можливості відповідно

// Окрім можливостей Автомобіля, ці 3 сутності повинні мати свої власні дані - розхід топлива, тип двигуна, об'єм двигуна, модель, рік випуску, маса, статус (або поїздка або готовий до поїздки) та справність авто


function Hatchback( expenditure, engineType, engineVolume, model, year, weight) {
    Car.call(this, 'start', 'finish',  expenditure, engineType, engineVolume, model, year, weight)
}
function StationWagon(expenditure, engineType, engineVolume, model, year, weight) {
    Car.call(this, 'start', 'finish', expenditure, engineType, engineVolume, model, year, weight,)
}  
function Sedan(expenditure, engineType, engineVolume, model, year, weight) {
    Car.call(this, 'start', 'finish', expenditure, engineType, engineVolume, model, year, weight)
} 

Hatchback.prototype = Object.create(Car.prototype);
StationWagon.prototype = Object.create(Car.prototype);
Sedan.prototype = Object.create(Car.prototype);

const hatchback = new Hatchback(7, 'petrol', 1596,  'ford focus', 2017, 1270);
const stationWagon = new StationWagon(7, 'petrol', 1596,  'ford focus', 2008, 1300);
const sedan = new Sedan(7, 'petrol', 1596, 'ford focus', 2021, 1300);
// Створити кілька автомоблів, поїздити. Переконатись, що кожна поїздка справді впливає на справність авто // это тут 
function testDrive(car, sets) {
    for(let i = 1; i <= sets; i++) {
        car.start();
        car.finish();
    }
}

console.log(hatchback);
console.log(stationWagon);
console.log(sedan);




// Статус авто - не можна почати нову поїздку не завершивши попередню. Статус має бути Boolean значенням. Де true - це Автомобіль зараз у поїздці. Та false - Автомобіль стоїть, можна починати нову поїздку (+)

// Відповідно методи Автомобіля почати та закінчити поїздку змінюють ці статуси у конкретного екземпляра (+) - но нужно проверить и протестировать !!!

// Справність авто - це число від 0-100. Від кожної поїздки на авто (викликаний методом почати поїздку) - справність зменшується (+)

// Кількість такої справності, яка зменшується визначати через Math.random. Випадкове число має бути в межах від 0.1 до 2.5 (+)

// Створити кілька автомоблів, поїздити. Переконатись, що кожна поїздка справді впливає на справність авто  (+) 
// -----------------------------


// Створити функцію Дилер, яка приймає 1 аргумент - створений пунктом вище автомобіль (з його даними)

// Функція Дилер визначає скільки коштуватиме ремонт машини відштовхуючись від прейскуранту цін наведених у таблиці

// Дилер після ремонту має оновити справність конкретного авто до 100 та повідомити власнику ціну ремонту