// Cтворити функцію, яка створює та реєструє нові команду у автопробізі. Під час виклику функції потрібно передати дані про команду - 
// назва команди, - стричка
// ім'я водія, стричка
// рік народження водія, намбер
// марка автомобіля.стричка
// спонсор команди та стричка
// чи водій допущений до автопробігу булевое



    // var booleanValue = true; 
    // var numericalValue = 354;
    // var stringValue = "This is a String";
    // var stringObject = new String( "This is a String Object" );
    // alert(typeof booleanValue) // displays "boolean"
    // alert(typeof numericalValue) // displays "number"
    // alert(typeof stringValue) // displays "string"
    // alert(typeof stringObject) // displays "object"

function carMileage(teamName, driverName, year, carBrand, teamSponsor, isAllowed) {
    if(typeof teamName !== 'string' || teamName.length < 3
        || typeof driverName !== 'string' || driverName.length < 5
        || typeof year !== 'number' ||  year < 1987
        || typeof carBrand !== 'string' || carBrand.length < 4
        || typeof teamSponsor !== 'string' || teamSponsor.length < 5
        || typeof isAllowed !== 'boolean'
    ){
        console.log('wrong parameter');
        return;
    }
    const team = {
        teamName: teamName,
        driverName: driverName,
        year: year,
        carBrand: carBrand,
        teamSponsor: teamSponsor,
        isAllowed: isAllowed,
    };
    return team;
}

 

// Запитати у користувача дані (через prompt та циклічно), про нового користувача у системі та зберегти його в об'єкт. Дані про користувача -
//  логін, 
//  пароль,
//   місто, 
//   країна,
//    стать, 
//    вік

// for (let key in my_math) {
//     console.log(`${key} = ${my_math[key]}`); //
//   }


function userData () {
    const user = {
        login: null,
        password: null,
        city: null,
        country: null,
        gender: null,
        age: null,
    }
    let value;

    for (let key in user) {
        value = prompt('enter your ' + key);

        if(typeof value === 'string' && value.length > 0){
            if(key === 'age') {
                value = Number(value);
            }
            user[key] = value;
        } 
    }

    return user;
}



// Створити функцію, яка буде міняти дані в конкретного користувача. Наприклад сhangeUserData(user_1, city, 'Kherson). Де user_1 - обʼєкт в якому буде мінятись, city - поле, як буде мінятися на нове значення поля city - 'Kherson'

function сhangeUserData (user, property, value) {

    if(typeof user == 'object' && user !== null && user.hasOwnProperty(property) 
    && ((property !== 'age' && typeof value === 'string' && value.length > 0) 
        || (property === 'age' &&  typeof value === 'number'))
    ){
        user[property] = value;
        return user;
    } else {
        console.log(` The Property is not valid in the object`);
    }
}






// Створити об'єкт cтудента - name, surname, age, course, city, greeting, addHomework.  +
// greetin - метод, котрий виводить повідомлення через console.log('Hi. everyone!'). addHomework - метод, котрий виводить повідомлення через console.log('Sending my howework... Please, wait') ???


const student = {
    name: "Olya",
    surname: "Semenenko",
    age: 24,
    course: 6,
    city: "Kharkiv",
    greeting: function () {
        console.log("Hi student!");
    },
    addHomework: function () {
        console.log("I will send soon, please wait");
    }
}


// Cтворити функцію isEmpty, яка повертає true, якщо об’єкт не має властивостей (порожній), інакше false.

function isEmpty (object) {
    return typeof object === 'object' && Object.keys(object).length === 0;
}






// Створити об’єкт для зберігання виручки команди продавців, наприкла: {Taras: 2000, Marta: 10 Ivan: 1200, Petro: 400, Roma: 366, Alina: 829} ??

const salaries = {
    Taras: 3000,
    Olha: 900,
    Mariya: 1500,
    Alina: 600,
    Oleh: 3210,
    Petro: 500,
}

// Створити фукнцію, яка працює з цим обʼєктом та обчислює суму всіх виручок та виводить результат через сonsole.log

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    //return sum;
    console.log(sum);
}

// Створити фукнцію, яка працює з цим обʼєктом та яка знаходить продавця з найменшою виручкою та виводить результат через сonsole.log у зрозумілому форматі
//for (const [key, value] of Object.entries(object1))

function findMin(salaries) {
    if(typeof salaries === 'object' && Object.keys(salaries).length !== 0) {
        const salaryValues = Object.values(salaries);
        const min = Math.min(...salaryValues);
        for (const [key, value] of Object.entries(salaries)) {
            if(value === min) {
                console.log( `Seller ${key} has minimal salary: ${value}`);
            }
        }
    } else {
        console.log('An object is not alloved');
    }
}

// Створити фукнцію, яка знаходить продавця з найбільшою виручкою та виводить результат через сonsole.log у зрозумілому форматі

function findMax(salaries) {
    if(typeof salaries === 'object' && Object.keys(salaries).length !== 0) {
        const salaryValues = Object.values(salaries);
        const max = Math.max(...salaryValues);
        for (const [key, value] of Object.entries(salaries)) {
            if(value === max) {
                console.log(`Seller ${key} has maximum salary: ${value}`);
            }
        }
    } else {
        console.log('An object is not alloved');
    }
}

// Створити фукнцію, яка випадковим чином вибирає продавця місяця та виводить привітання цьому працівнику через сonsole.log у зрозумілому форматі

function findBest(salaries) {
    if(typeof salaries === 'object' && Object.keys(salaries).length !== 0) {
        const keys = Object.keys(salaries);
        const name = keys[Math.floor(Math.random() * keys.length)];
       
        console.log( `Our Best Seller is ${name}`);   
    } else {
        console.log('An object is not alloved');
    }
}