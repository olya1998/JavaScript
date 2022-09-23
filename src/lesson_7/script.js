// Cтворити функцію, яка створює та реєструє нові команду у автопробізі. Під час виклику функції потрібно передати дані про команду - 
// назва команди, - стричка
// ім'я водія, стричка
// рік народження водія, намбер
// марка автомобіля.стричка
// спонсор команди та стричка
// чи водій допущений до автопробігу булевое


function carMileage(teamName, driverName, year, carBrand, teamSponsor, isAllowed) {

    // var booleanValue = true; 
    // var numericalValue = 354;
    // var stringValue = "This is a String";
    // var stringObject = new String( "This is a String Object" );
    // alert(typeof booleanValue) // displays "boolean"
    // alert(typeof numericalValue) // displays "number"
    // alert(typeof stringValue) // displays "string"
    // alert(typeof stringObject) // displays "object"

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

 

// Запитати у користувача дані (через prompt та циклічно), про нового користувача у системі та зберегти його в об'єкт. Дані про користувача - логін, пароль, місто, країна, стать, вік

/*const bert = prompt("Напишите свой логин, пароль, город");
console.log('your dsta =', bert)

const userData = {
    
}
console.log(userData);

userData = bert;
*/


    



// Створити функцію, яка буде міняти дані в конкретного користувача. Наприклад сhangeUserData(user_1, city, 'Kherson). Де user_1 - обʼєкт в якому буде мінятись, city - поле, як буде мінятися на нове значення поля city - 'Kherson'

// Створити об'єкт cтудента - name, surname, age, course, city, greeting, addHomework.  +
// greetin - метод, котрий виводить повідомлення через console.log('Hi. everyone!'). addHomework - метод, котрий виводить повідомлення через console.log('Sending my howework... Please, wait') ???


/*const student = {
    name: "Olya",
    surname: "Semenenko",
    age: 24,
    course: 4,
    city: "Kharkiv",
    greeting: 'Hi student!',
    addHomework: 'I will send soon, please wait',
}
console.log(student); 
console.log(student ["greeting"]); 
console.log(student ["addHomework"]); 
*/



// Cтворити функцію isEmpty, яка повертає true, якщо об’єкт не має властивостей (порожній), інакше false.




// Створити об’єкт для зберігання виручки команди продавців, наприкла: {Taras: 2000, Marta: 10 Ivan: 1200, Petro: 400, Roma: 366, Alina: 829} ??


const salaries = {
    Taras: 3000,
    Olha: 900,
    Mariya: 1500,
    Alina: 600,
    Oleh: 3210,
    Petro: 899,
    
};

console.log(salaries);



// Створити фукнцію, яка працює з цим обʼєктом та обчислює суму всіх виручок та виводить результат через сonsole.log

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; 
  }
  
  
  console.log( sumSalaries(salaries));



// Створити фукнцію, яка працює з цим обʼєктом та яка знаходить продавця з найменшою виручкою та виводить результат через сonsole.log у зрозумілому форматі





// Створити фукнцію, яка знаходить продавця з найбільшою виручкою та виводить результат через сonsole.log у зрозумілому форматі

// Створити фукнцію, яка випадковим чином вибирає продавця місяця та виводить привітання цьому працівнику через сonsole.log у зрозумілому форматі

