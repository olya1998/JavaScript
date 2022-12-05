// Ознайомитись та опрацювати Promise.race, Promise.any, Promise.resolve/Promise.reject

// Реалізувати веб-сторінку для пошуку фільмів.

// На головній сторінці необхідно реалізувати форму для введення назви фільму/серіалу 




// нужен обработчик событиия - клик на конпку 
const input = document.getElementById('movie'); 
const search = document.getElementById('search');
const result = document.getElementById('result');
const ApiKey = '6d4f5f8a';

const baseUrl = `http://www.omdbapi.com/?apikey=${ApiKey}&plot=full&s=`;  //

const detailsUrl = `https://www.omdbapi.com/?apikey=${ApiKey}&i=`;


// https://www.omdbapi.com/?i=tt7767422&apikey=6d4f5f8a
// www.omdbapi.com - домен 
// параметры: i, apikey


// функция создать элемент(фильм) списка 

function getFilmHTML (film) {
    return `
        <div class="result">
            <div class="film-list film_line">
                <h4 class="filmTitle"> ${film.Title}</h4>
                <img src="${film.Poster}" width="200" alt="">
                <button class="details" id="${film.imdbID}" onclick="getDatails('${film.imdbID}')">Datails</button>
            </div>
            <div class="film_line" id="film_details_${film.imdbID}"></div>
            <div class="separator">
                <hr>
            </div>
        </div>`;
}


function getFilmDetailsHTML (filmDetails) {
    return `
        <div class="result">
            <div class="film-list">               
                <p>${filmDetails.Plot}</p>
            </div>
            <div class="separator"></div>
        </div>`;
}

function getDatails(id) {
    const requests = fetch(detailsUrl + id).then((res) => res.json());

    Promise.all([requests])
    .then((responses) => {
        const filmDetails = document.getElementById('film_details_' + id)

         responses.forEach((response) => {
            
            filmDetails.innerHTML = getFilmDetailsHTML(response);
            
        });

    });
}



search.addEventListener('click', function () {
    //при каждом нажатии на "искать" - удалять все результаты поиска - как это делает гугл 
     const requests = fetch(baseUrl + input.value).then((res) => res.json());
 

    Promise.all([requests])
    .then((responses) => {
        
         responses.forEach((response) => {

            if(response.Response == 'False') {
                result.innerHTML = `<h3> ${response.Error}</h3>`;
                return;
            }

            response.Search.forEach((film) => {
                result.innerHTML += getFilmHTML(film);
            }) 
           
        });

         document.querySelectorAll('.details').forEach((detailElement) => {
            detailElement.addEventListener('click', function () {
                getDatails(this.id);
             })
         })

    });

})

// обработчик клика на Детальнее (такой же как выше - только там без цикла). нужно передать ID - взятый из списка film.imdbID
// нужно передавать ID этого фильма в строке запроса







// Реалізувати кнопку Search та при кліку на яку необхідно відправити відповідний запит до API ресурсу OMDB (http://www.omdbapi.com/) за допомогою AJAX (fetch).

// Результат необхідно розпарсити та відобразити нижче на сторінці. Якщо за заданими пошуком полес не знайдено фільмів, то з’являється повідомлення Movie not found

// OMDB за замовчуванням повертає лише перші 10 фільмів. Тому необхідно реалізувати пагінацію

// Біля кожного фільму повинна бути кнопка Details, натискання на яку виводитиме детальну інформацію про фільм. Цю інформацію необхідно виводити на цій же сторінці одразу під списком знайдених фільмів і пагінацією.

// Всі запити необхідно відправляти за допомогою AJAX. Тобто при натисканні на будь-які кнопки веб-сторінка не повинна оновлюватися.

// Посилання на API OMDB: http://www.omdbapi.com/ (необхідно зареєструватися для отримання API KEY).