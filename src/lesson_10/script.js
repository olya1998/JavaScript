// Homework 10

const OPERABILITY = 100;

// Реалізувати фунцію-конструктор Автомобіля.
function Car(startTripe, finishTripe, expenditure, engineType, engineVolume, model, year, weight, operability = OPERABILITY) {
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
function Sedan(expenditure, engineType, engineVolume, model, year, weight) {
    Car.call(this, 'start', 'finish', expenditure, engineType, engineVolume, model, year, weight)
} 
function Universal(expenditure, engineType, engineVolume, model, year, weight) {
    Car.call(this, 'start', 'finish', expenditure, engineType, engineVolume, model, year, weight,)
} 

Hatchback.prototype = Object.create(Car.prototype);
Sedan.prototype = Object.create(Car.prototype);
Universal.prototype = Object.create(Car.prototype);

const hatchback = new Hatchback(7, 'petrol', 1596,  'ford focus', 2017, 1270);
const sedan = new Sedan(7, 'petrol', 1596, 'ford focus', 2021, 1300);
const universal = new Universal(7, 'petrol', 1596,  'ford focus', 2008, 1300);
// Створити кілька автомоблів, поїздити. Переконатись, що кожна поїздка справді впливає на справність авто 
function testDrive(car, sets) {
    for(let i = 1; i <= sets; i++) {
        car.start();
        car.finish();
    }
}

function getPrices() {
    return  {
        Hatchback: {
            price: 110,
            year: [
                {   min: 2019,
                    max: 2022,
                    factor: 1.2
                },
                {   min: 2010,
                    max: 2018,
                    factor: 1.4
                },
                {   min: 2000,
                    max: 2009,
                    factor: 1.7
                },
                {   min: 1990,
                    max: 1999,
                    factor: 2.0
                }
            ],
            type: {
                disel: 2.2,
                petrol: 1.8 
            },
            mass: [
                {
                    min: 800,
                    max: 1100,
                    factor: 1.5
                },
                {
                    min: 1101,
                    max: 1400,
                    factor: 1.7
                },
                {
                    min: 1401,
                    max: Infinity,
                    factor: 2.0
                },
            ]
        },
        Sedan: {
            price: 110,
            year: [
                {   min: 2019,
                    max: 2022,
                    factor: 1.5
                },
                {   min: 2010,
                    max: 2018,
                    factor: 1.8
                },
                {   min: 2000,
                    max: 2009,
                    factor: 2.0
                },
                {   min: 1990,
                    max: 1999,
                    factor: 2.6
                }
            ],
            type: {
                disel: 2.5,
                petrol: 2.0 
            },
            mass: [
                {
                    min: 800,
                    max: 1100,
                    factor: 1.6
                },
                {
                    min: 1101,
                    max: 1400,
                    factor: 1.8
                },
                {
                    min: 1401,
                    max: Infinity,
                    factor: 2.1 
                },
            ]
        },
        Universal:{
            price: 110,
            year: [
                {   min: 2019,
                    max: 2022,
                    factor: 2.0
                },
                {   min: 2010,
                    max: 2018,
                    factor: 2.2
                },
                {   min: 2000,
                    max: 2009,
                    factor: 2.5
                },
                {   min: 1990,
                    max: 1999,
                    factor: 3.0
                }
            ],
            type: {
                disel: 2.9,
                petrol: 2.4 
            },
            mass: [
                {
                    min: 800,
                    max: 1100,
                    factor: 1.7
                },
                {
                    min: 1101,
                    max: 1400,
                    factor: 1.9
                },
                {
                    min: 1401,
                    max: Infinity,
                    factor: 2.2
                },
            ]
        },
    };
}


// Створити функцію Дилер, яка приймає 1 аргумент - створений пунктом вище автомобіль (з його даними)
function autoDiler(car) {
    if(typeof car === 'object' && car instanceof Car) {
        if(car.operability >= 100 && car.operability <= 0) {
            console.log('Your can not be repaired, please contact your manager', car.operability);
            return;
        } 
        let instanceName;
        if(sedan instanceof Sedan) {
            instanceName = 'Sedan';
        } else if (sedan instanceof Hatchback) {
            instanceName = 'Hatchback';
        } else if (sedan instanceof Universal) {
            instanceName = 'Universal';
        }        
        
        const prices = getPrices()[instanceName];

        let koef = 0;
        

        //рассчёт коеф для года
        for(i = 0; i < prices.year.length; i++) {
            if(car.year >= prices.year[i].min && car.year <= prices.year[i].max ) {
                koef += prices.year[i].factor;
            }
        }

        //рассчёт коеф для массы
        for(i = 0; i < prices.mass.length; i++) {
            if(car.weight >= prices.mass[i].min && car.weight <= prices.mass[i].max ) {
                koef += prices.mass[i].factor;
            }
        }

        // рассчёт коеф для типа двигателя
        koef += prices.type[car.engineType];

        if(koef <= 0) {
            console.log('Sorry, your can in unreapairable :)');
            return;
        }

        // тут цена за каждый 0.1 урона 
        const pricePerUnit =  Number((prices.price * koef).toFixed(2));

        // тут общий урон для авто 100 минус то, что наломали в процессе поездок
        const damage = Number((OPERABILITY - car.operability).toFixed(1));

        // тут итоговая цена ремонта Урон * цену_за_01_урона
        const totalPrice =  Number((damage * pricePerUnit).toFixed(2));

        console.log(`Your car damage is ${damage}, fixing you car will cost ${totalPrice} USD`);

        return {
            damage: damage,
            totalPrice: totalPrice
        };
        
    }
    console.log('Validation error');
    return false;
}
//console.log(autoDiler(hatchback)['Hatchback']);

// console.log(hatchback);
// console.log(universal);
// console.log(sedan);




// Статус авто - не можна почати нову поїздку не завершивши попередню. Статус має бути Boolean значенням. Де true - це Автомобіль зараз у поїздці. Та false - Автомобіль стоїть, можна починати нову поїздку (+)

// Відповідно методи Автомобіля почати та закінчити поїздку змінюють ці статуси у конкретного екземпляра (+) - но нужно проверить и протестировать !!!

// Справність авто - це число від 0-100. Від кожної поїздки на авто (викликаний методом почати поїздку) - справність зменшується (+)

// Кількість такої справності, яка зменшується визначати через Math.random. Випадкове число має бути в межах від 0.1 до 2.5 (+)

// Створити кілька автомоблів, поїздити. Переконатись, що кожна поїздка справді впливає на справність авто  (+) 
// -----------------------------


// Створити функцію Дилер, яка приймає 1 аргумент - створений пунктом вище автомобіль (з його даними)

// Функція Дилер визначає скільки коштуватиме ремонт машини відштовхуючись від прейскуранту цін наведених у таблиці

// Дилер після ремонту має оновити справність конкретного авто до 100 та повідомити власнику ціну ремонту