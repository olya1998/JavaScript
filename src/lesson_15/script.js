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


const getWeather = document.getElementById('get_weather');

// констнанта объекта для HTTP Requests
const xhttp = new XMLHttpRequest();

function formatDate(date) {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
}

function fToC(F) {
    return Math.round((5/9) * (F - 32)) + ' \xB0C.';
}

function getImage(flag) {
    const img = flag ? 'storm' : 'sun';

    return ` <img src="img/${img}.jpg" class="icon" alt="">`;
}

function buildHtml(daysData) {

    const unixTimeZero = new Date(daysData.Date);

    return `<div class="weather">
            <h2>${formatDate(unixTimeZero)}</h2>
            <div id="day">${fToC(daysData.Temperature.Maximum.Value)} / ${getImage(daysData.Day.HasPrecipitation)}</div> 
            <div id="night">${fToC(daysData.Temperature.Minimum.Value)} / ${getImage(daysData.Night.HasPrecipitation)} </div>
        </div>`;
}

const resultDiv = document.getElementById('weather_result');

function getWeatherData() {
    const inputCity = document.getElementById('city').value;

    if(citiesList.hasOwnProperty(inputCity)) {
    

        xhttp.open('Get', `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${citiesList[inputCity]}?apikey=${apiKey}`)
        xhttp.send();
        xhttp.onload = function() {
            if(this.readyState === 4 && this.status === 200) {
                
                const data = JSON.parse(this.response);
                
                resultDiv.innerHTML = '';

                data.DailyForecasts.forEach(function(day) {
                    // теперь через аппенд добавляем содержимое в наш результирующий див
                    const dayHtml = buildHtml(day);

                    resultDiv.innerHTML += dayHtml;
                })

            } else {
                console.log(JSON.parse(this.response));

                return null;
            }
        }
 
    } else {
     console.log('ERROR!');
     resultDiv.innerHTML = '<h1>Error: City is Not Valid</h1>';
    }    
}

getWeather.addEventListener('click', getWeatherData)
