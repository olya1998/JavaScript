const input = document.getElementById('movie'); 
const search = document.getElementById('search');
const result = document.getElementById('result');
const ApiKey = '6d4f5f8a';
const perPage = 10;
const maxPages = 15;

const page = search.dataset.page;

const baseUrl = `http://www.omdbapi.com/?apikey=${ApiKey}&plot=full&s=`;

const detailsUrl = `https://www.omdbapi.com/?apikey=${ApiKey}&i=`;

const getFilmHTML = (film) => {
    return `
        <div class="result">
            <div class="film-list film_line">
                <h4 class="filmTitle"> ${film.Title}</h4>
                <img src="${film.Poster}" width="200" alt="">
                <button class="details" id="${film.imdbID}" onclick="getDetails('${film.imdbID}')">Details</button>
            </div>
            <div class="film_line" id="film_details_${film.imdbID}"></div>
        </div>
        <hr>`;
};

const getFilmDetailsHTML = (filmDetails) => {
    return `
        <div class="result">
            <div class="film-list">               
                <p>${filmDetails.Plot}</p>
            </div>
            <div class="separator"></div>
        </div>`;
};

const getDetails = async (id) => {
    try {
        let details = await axios.get(detailsUrl + id);
        details = details.data;

        const filmDetails = document.getElementById('film_details_' + id);
        filmDetails.innerHTML = getFilmDetailsHTML(details);

    } catch (error) {
        console.log(error);
    }  
};

 const buildPagination = (totalPages, currentPage) => {
    let pagesHTML = '';
    let pushed;

    const pages = Math.ceil(totalPages / perPage);
    for(let i = 1; i < pages && i <= maxPages; i++) {

        pushed = currentPage == i ? 'pushed' : '';
        pagesHTML += `<button class="${pushed}" onClick="setPage(${i})" class="paginator">${i}</button>`;
    }

    return pagesHTML;
};

const setPage = (page) => {
    search.dataset.page = page;
    search.click();
};

const searchFilm = async (e) => {
    const that = e.target;
    const requestUrl = baseUrl + input.value; 
    const page = that.dataset.page;

    const requests = await axios.get(requestUrl + `&page=${page}`);
    const results = requests.data;
    
    result.innerHTML = '';

    if(results.Response == 'False') {
        result.innerHTML = `<h3> ${response.Error}</h3>`;
        return;
    }

    if(results.totalResults > perPage) {
        const pages = buildPagination(results.totalResults, page);

        document.querySelectorAll('.pagination_div').forEach((paginanation) => {
            paginanation.innerHTML = pages;
        });       
    }

    results.Search.forEach((film) => {
        result.innerHTML += getFilmHTML(film);
    });

    result.addEventListener('click', function (e) {
        const target = e.target;
        if (!target.classList.contains('deteails')) {
            return;
        }

        getDetails(this.id);
    });     
};

search.addEventListener('click', searchFilm);

  