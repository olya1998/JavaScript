// Ознайомитись та опрацювати Promise.race, Promise.any, Promise.resolve/Promise.reject

// Реалізувати веб-сторінку для пошуку фільмів.

// На головній сторінці необхідно реалізувати форму для введення назви фільму/серіалу 
// с этого начнём (базовая часть готова)


/// вспоминаем что делали на прошлых ДЗ 
// нужен обработчик событиия - клик на конпку 
const input = document.getElementById('movie'); 
const button = document.getElementById('search');
const result = document.getElementById('result');
const ApiKey = '6d4f5f8a';

const baseUrl = `http://www.omdbapi.com/?apikey=${ApiKey}&plot=full&s=`;  //

const detailsUrl = `https://www.omdbapi.com/?apikey=${ApiKey}&i=`;


// https://www.omdbapi.com/?i=tt7767422&apikey=6d4f5f8a
// www.omdbapi.com - домен 
// параметры: i, apikey
// это для того чтобы ты разбиралась как их считывать и задавать - это будет очень часто использоваться - нужно шарить розумьем


// функция создать элемент(фильм) списка 

function getFilmHTML (film) {
    return `
        <div id="result">
            <div class="film-list">
                <h4 class="filmTitle"> ${film.Title}</h4>
                <img src="${film.Poster}" width="300" alt="член импотента">
                <button class="details" data-details="описание того как авокадинка отрезала член импотентику с отрезанными яйцами во рту- в качестве кляпа">Details</button>
            </div>
            <div class="separator"></div>
        </div>`;
}


function addEvent(id) {
    const btnDetails = document.getElementsByClassName('details');  // Collection of objects

    console.log(btnDetails);
    for (let i = 0; i < btnDetails.length; i++) {
        console.log(btnDetails[i].id); //second console output
    }

    // btnDetails.forEach((element) => {
    //     element.addEventListener('click', function() {
    //         console.log(this);
    //     });
    // });

    // тут ещё один шаг нужен 
   
}


button.addEventListener('click', function () {
    //при каждом нажатии на "искать" - удалять все результаты поиска - как это делает гугл 
     const requests = fetch(baseUrl + input.value).then((res) => res.json());
 

    Promise.all([requests])
    .then((responses) => {
        // проверка - если количество меньше 1 - тогда сообщение об ошибке и выхо

        //console.log(responses);
         responses.forEach((response) => {
            // вот тут будем отображать на странице результаты поиска
            // список названий + кнопка - подробнее - при клике на которую - отображается детальная информация о фильме

            // давай для начала выведем результат поиска - список названий фильмов

            response.Search.forEach((film) => {
                    // нам нужно найти как-то макет для отображения фильмов: название и подробнее ()


                result.innerHTML += getFilmHTML(film);
                
            }) // мы знаем что это массив - потому делаем цикл/ . каждый элемент в цикле -
            // будет в указанной переменной 
            

         console.log(response);
        });
        addEvent(23);

    });

})

// обработчик клика на Детальнее (такой же как выше - только там без цикла). нужно передать ID - взятый из списка film.imdbID
// теперь делаем тут для вывода деталей по фильму 
// мы знаем что для того, чтобы вывести детали по фильму - нужно передавать ID этого фильма в строке запроса
// 1 сделаем обработчик 







// Реалізувати кнопку Search та при кліку на яку необхідно відправити відповідний запит до API ресурсу OMDB (http://www.omdbapi.com/) за допомогою AJAX (fetch).

// Результат необхідно розпарсити та відобразити нижче на сторінці. Якщо за заданими пошуком полес не знайдено фільмів, то з’являється повідомлення Movie not found

// OMDB за замовчуванням повертає лише перші 10 фільмів. Тому необхідно реалізувати пагінацію

// Біля кожного фільму повинна бути кнопка Details, натискання на яку виводитиме детальну інформацію про фільм. Цю інформацію необхідно виводити на цій же сторінці одразу під списком знайдених фільмів і пагінацією.

// Всі запити необхідно відправляти за допомогою AJAX. Тобто при натисканні на будь-які кнопки веб-сторінка не повинна оновлюватися.

// Посилання на API OMDB: http://www.omdbapi.com/ (необхідно зареєструватися для отримання API KEY).