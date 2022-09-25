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

function userData () {
    const user = {
        login: null,
        password: null,
        city: null,
        country: null,
        gender: null,
        age: null,
    };
    let value;

    for (let key in user) {
        value = prompt('enter your' + key);

        if(typeof value === 'string' && value.length > 0){
            if(key === 'age') {
                value = Number(value);
            }
            user[key] = value;
        }
    }

    return user;
}

function сhangeUserData (user, property, value) {

    if(typeof user == 'object' && user !== null && user.hasOwnProperty(property)
        && ((property !== 'age' && typeof value === 'string' && value.length > 0)
        || (property === 'age' &&  typeof value === 'number'))
    ){
        user[property] = value;
        
        return user;
    } else {
        console.log(`The Property is not valid in the object`);
    }
}

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

function isEmpty (object) {
    return typeof object === 'object' && Object.keys(object).length === 0;
}

const salaries = {
    Taras: 3000,
    Olha: 900,
    Mariya: 1500,
    Alina: 600,
    Oleh: 3210,
    Petro: 500,
}

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    //return sum;
    console.log(sum);
}

function findMin(salaries) {
    if(typeof salaries === 'object' && Object.keys(salaries).length !== 0) {
        const salaryValues = Object.values(salaries);
        const min = Math.min(...salaryValues);
        for (const [key, value] of Object.entries(salaries)) {
            if(value === min) {
                console.log(`Seller ${key} has minimal salary: ${value}`);
            }
        }
    } else {
        console.log('An object is not alloved');
    }
}

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

function findBest(salaries) {
    if(typeof salaries === 'object' && Object.keys(salaries).length !== 0) {
        const keys = Object.keys(salaries);
        const name = keys[Math.floor(Math.random() * keys.length)];
       
        console.log(`Our Best Seller is ${name}`);
    } else {
        console.log('An object is not alloved');
    }
}