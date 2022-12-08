// За основу взяти ДЗ 15. AJAX

// Докинути стилів та гарно оформити. Це важливо

const apiKey = '1dB5HAESsayMuxns9csvyV9lpA7Bhe5L';
const baseURL = 'http://dataservice.accuweather.com';

const inputCity = document.getElementById('city');
//
const cityName = document.getElementById('caption');


function getWeatherURLI (cityKey) {
    return baseURL + `/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}`;
}

function getSearchrURI (city) {
    return baseURL + `/locations/v1/search?apikey=${apiKey}&q=${city}`;
}

function getNeighborsURI (cityKey) {
    return baseURL + `/locations/v1/cities/neighbors/${cityKey}?apikey=${apiKey}`;
}
// /locations/v1/cities/neighbors/324561?apikey=1dB5HAESsayMuxns9csvyV9lpA7Bhe5L

const citiesList = {
    'Lviv': 324561,
    'Kyiv': 324505,
    'Kharkiv': 323903,
    'Chernihiv': 322162,
    'Odesa': 325343,
    'Mariupol': 323037,
    'Poltava': 325523,
    'Zhytomyr': 326609,
    'Cherkasy': 321985,
    'London': 328328,
    'Warsaw': 274663,
    'New York': 349727,
};

const getWeather = document.getElementById('get_weather');
//
const neighborsDiv = document.getElementById('neighbors');
const xhttp = new XMLHttpRequest();

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

//searchCity

function searchCity(cityName) {
    console.log(cityName);
    // наверно лучше не сам ключ, а название города передавать
    // чтобы потом по названию искать 
    // так не очень оптимально - но мельше гемороя 
// меняем значение в строке поиска
inputCity.value = cityName;

getWeatherData();


}

function getNeighborCityLink(cityObject) {
    return `<div class="cityLink">
        <h2></h2>
        <button class="cityButton" onClick="searchCity('${cityObject.LocalizedName}')" class="paginator">${cityObject.LocalizedName}</button> 
    </div>`;
}

const resultDiv = document.getElementById('weather_result');

async function getWeatherData() {
    //const inputCity = document.getElementById('city').value;
    //чистим старые результаты



    // делаем запрос к серверу - ищем такой город
    const cityResult = await fetch(getSearchrURI(inputCity.value))
    .then((response) => response.json())
    .catch((error) => {
        console.error('Error:', error);
    });


    //если не находим - сообщение об ошибке
    if(!cityResult.length) {
        console.log('Error')
        // вывести сообщение что такого города нет - пользователю - какой-то див с этим текстом
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

     console.log(neighborsResult);
    // return;

    



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
    //getNeighborCityLink

    //если не находим соседей - в области, где должны быть ссылки на другие города - надпись - соседей не нашли
    if(neighborsResult.length) {

        neighborsDiv.innerHTML = '';

        await neighborsResult.forEach(function(neighborsCity) {
            const cityHtml = getNeighborCityLink(neighborsCity);

            neighborsDiv.innerHTML += cityHtml;
        });

    } else {
        console.log('Error:  no neighbors');
        // вывести сообщение соседей не нашли - какой-то див с этим текстом
        // продолжаем выполнение, так как это не меняет основного функционала 
    }

   

    return ;
    // обработчик клика на этот город - подставляется значение в строку поиска и все шаги повторяются 

    if(citiesList.hasOwnProperty(inputCity)) {
        xhttp.open('Get', `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${citiesList[inputCity]}?apikey=${apiKey}`);
        xhttp.send();
        xhttp.onload = function() {
            if(this.readyState === 4 && this.status === 200) {

                const data = JSON.parse(this.response);
                
                resultDiv.innerHTML = '';

                data.DailyForecasts.forEach(function(day) {
                    const dayHtml = renderHtml(day);

                    resultDiv.innerHTML += dayHtml;
                });

            } else {
                console.log(JSON.parse(this.response));

                return null;
            }
        };
 
    } else {
     console.log('ERROR!');
     resultDiv.innerHTML = '<h1 id="error">Error: City is Not Valid!</h1>';
    }    
}

getWeather.addEventListener('click', getWeatherData);

async function showWeather() {

    // 
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // запрашиваем информацию об этом пользователе из github
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // отображаем аватар пользователя
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // ждём 3 секунды и затем скрываем аватар
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  //showWeather();

// Переписати ввесь робочий код під async/await

// ***Забрати обмеження в кількість міст. Відтепер можна вводити будь-яке місто/селище тощо, й якщо API повертає результат - відмальовувати його. (стосується тільки тих, в кого місто треба вводити у input-поле)

// В іншому випадку - повідомлення, що такого міста не знайдено

// Додати новий функціонал використавши https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/neighbors/%7BlocationKey%7D

// Після отримання погоди по конкретному місцю на кроці 3, під погодою на 5 днів повине відобразитись список міст, які видасть API на кроці 5.

// Кожне таке нове місто - це є кнопка/плитка/контейнер. При кліку на такий контейнер необхідно отримати погоду по клікнотому місту

// Й так нескінченно, кожне місто матиме "сусідів"
