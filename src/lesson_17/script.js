// За основу взяти ДЗ 15. AJAX

// Докинути стилів та гарно оформити. Це важливо

const apiKey = '1dB5HAESsayMuxns9csvyV9lpA7Bhe5L';
const baseURL = 'http://dataservice.accuweather.com';
const inputCity = document.getElementById('city');
const cityName = document.getElementById('caption');
const getWeather = document.getElementById('get_weather');
const neighborsDiv = document.getElementById('neighbors');
const resultDiv = document.getElementById('weather_result');


function getWeatherURLI (cityKey) {
    return baseURL + `/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}`;
}

function getSearchrURI (city) {
    return baseURL + `/locations/v1/search?apikey=${apiKey}&q=${city}`;
}

function getNeighborsURI (cityKey) {
    return baseURL + `/locations/v1/cities/neighbors/${cityKey}?apikey=${apiKey}`;
}

function formatDate(date) {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return dd + '/' + mm + '/' + yyyy;
}

const convertFToC = (F) => Math.round((5/9) * (F - 32)) + '\xB0C.';

const getImage = (condition) => `<img src="img/${condition ? 'storm' : 'sun'}.jpg" class="icon" alt="Weather conditions image">`;

function renderHtml(daysData) {
    const unixTimeZero = new Date(daysData.Date);

    return `<div class="weather">
            <h2>${formatDate(unixTimeZero)}</h2>
            <div id="day">${convertFToC(daysData.Temperature.Maximum.Value)} / ${getImage(daysData.Day.HasPrecipitation)}</div> 
            <div id="night">${convertFToC(daysData.Temperature.Minimum.Value)} / ${getImage(daysData.Night.HasPrecipitation)}</div>
        </div>`;
}

function searchCity(cityName) {
    inputCity.value = cityName;
    getWeatherData();
}

function getNeighborCityLink(cityObject) {
    return `<div class="cityLink">
        <h2></h2>
        <button class="cityButton" onClick="searchCity('${cityObject.LocalizedName}')" class="paginator">${cityObject.LocalizedName}</button> 
    </div>`;
}

function cleatResults() {
    resultDiv.innerHTML = '';
    cityName.innerHTML = '';
    neighborsDiv.innerHTML = '';
}


async function getWeatherData() {
    const cityResult = await fetch(getSearchrURI(inputCity.value))
    .then((response) => response.json())
    .catch((error) => {
        console.error('Error:', error);
    });

    //если не находим - сообщение об ошибке
    if(!cityResult.length) {
        console.log('Error')
        // тут не сделали вывод - что город не нейден 
        // вывести сообщение что такого города нет - пользователю - какой-то див с этим текстом
        cleatResults();
        resultDiv.innerHTML = `<h3> City not found </h3>`;

        return;  // это прекращает дальнейшее выволнение функции
    }

    cityName.innerHTML = `Weather in ${cityResult[0].LocalizedName} for nex 5 days`;

    const searchCityKey = cityResult[0].Key;

    //если находим - делаем второй запрос на соседние города 
    const neighborsResult = await fetch(getNeighborsURI(searchCityKey))
    .then((response) => response.json())
    .catch((error) => {
        console.error('Error:', error);
    });
    

    // делаем запрос прогоды по этому городу
    const weatherResult = await fetch(getWeatherURLI(searchCityKey))
    .then((response) => response.json())
    .catch((error) => {
        console.error('Error:', error);
    });
   

    // отрисовываем погоду по этому городу 
    resultDiv.innerHTML = '';

    await weatherResult.DailyForecasts.forEach(function(day) {
        const dayHtml = renderHtml(day);

        resultDiv.innerHTML += dayHtml;
    });

    // и создаём кнопки - соседние города 


    //если не находим соседей - в области, где должны быть ссылки на другие города - надпись - соседей не нашли
    if(neighborsResult.length) {

        neighborsDiv.innerHTML = '';

        await neighborsResult.forEach(function(neighborsCity) {
            const cityHtml = getNeighborCityLink(neighborsCity);

            neighborsDiv.innerHTML += cityHtml;
        });

    } else {
        console.log('Error:  no neighbors');
        // продолжаем выполнение, так как это не меняет основного функционала 
    }

       // обработчик клика на этот город - подставляется значение в строку поиска и все шаги повторяются 

}

getWeather.addEventListener('click', getWeatherData);

  


// ***Забрати обмеження в кількість міст. Відтепер можна вводити будь-яке місто/селище тощо, й якщо API повертає результат - відмальовувати його. (стосується тільки тих, в кого місто треба вводити у input-поле)

// В іншому випадку - повідомлення, що такого міста не знайдено

// Додати новий функціонал використавши https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/neighbors/%7BlocationKey%7D

// Після отримання погоди по конкретному місцю на кроці 3, під погодою на 5 днів повине відобразитись список міст, які видасть API на кроці 5.

// Кожне таке нове місто - це є кнопка/плитка/контейнер. При кліку на такий контейнер необхідно отримати погоду по клікнотому місту

// Й так нескінченно, кожне місто матиме "сусідів"
