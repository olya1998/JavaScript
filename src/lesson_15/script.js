// У Домашці (JS+HTML+CSS) необхідно реалізувати наступний функціонал - кнопку Get Weather та input-поле із назвою міста. Назви міст поки обмежений, можна обрати лише із наявного списку нижче

// Необхідно додати валідацію на те чи місто є серед списку

// При кліку по кнопці Get Weather необхідно вставити в HTML інформацію про прогноз погоди на настуні 5 днів.Cеред даних витягувати інформацію про - температуру, хмарність/ясність, перепади температур вдень та вночі та дату у форматі (ДД/ММ/РРРР)

// Стилі вітаються

// Дані про locationKey представлені у списку
// Lviv - 324561 Kyiv - 324505 Kharkiv - 323903
// Chernihiv - 322162 Odesa - 325343 Mariupol - 323037
// Poltava - 325523 Zhytomyr - 326609 Cherkasy - 321985
// London - 328328 Warsaw - 274663 New York - 349727

const apiKey = '1dB5HAESsayMuxns9csvyV9lpA7Bhe5L';

const citiesList = {
    Lviv: 324561,
    Kyiv: 324505, 
    Kharkiv: 323903,
    Chernihiv: 322162, 
    Odesa: 325343, 
    Mariupol: 323037,
    Poltava: 325523, 
    Zhytomyr: 326609, 
    Cherkasy: 321985,
    London: 328328, 
    Warsaw: 274663, 
    "New York": 349727,
};

console.log(citiesList.hasOwnProperty("Lviv"))

const getWeather = document.getElementById('get_weather');

// констнанта объекта для HTTP Requests
const xhttp = new XMLHttpRequest();

// функуия отправки запроса, получения ответа - и разобрать ответ в элементы на HTTP странице 
// теперь тут
function getWeatherData() {
    const inputCity = document.getElementById('city').value;

    if(citiesList.hasOwnProperty(inputCity)) {
    

        xhttp.open('Get', `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${citiesList[inputCity]}?apikey=${apiKey}`)
        xhttp.send();
        xhttp.onload = function() {
            if(this.readyState === 4 && this.status === 200) {
                
                const data = JSON.parse(this.response);
                console.log(data);
                // TODO::  разложить данные в HTML

            } else {
                console.log(JSON.parse(this.response));

                return null;
            }
        }
 
    } else {
     console.log('ERROR!')  

    }
 
 
     console.log(inputCity.value)
    
}

getWeather.addEventListener('click', getWeatherData)
