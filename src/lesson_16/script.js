
const input = document.getElementById('movie'); 
const search = document.getElementById('search');
const result = document.getElementById('result');
const ApiKey = '6d4f5f8a';
const perPage = 10;

const maxPages = 15;

const page = search.dataset.page;

const baseUrl = `http://www.omdbapi.com/?apikey=${ApiKey}&plot=full&s=`;  //

const detailsUrl = `https://www.omdbapi.com/?apikey=${ApiKey}&i=`;



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

function buildPagination(totalPages, currentPage) {
    let pagesHTML = '';
    let pushed;

    const pages = Math.ceil(totalPages / perPage);
    for(let i = 1; i < pages && i <= maxPages; i++) {

        pushed = currentPage == i ? 'pushed' : '';
        pagesHTML += `<button class="${pushed}" onClick="setPage(${i})" class="paginator">${i}</button>`;
    }

    return pagesHTML;
}

function setPage(page) {
    search.dataset.page = page;
    search.click();
}



search.addEventListener('click', function () {
    const requestUrl = baseUrl + input.value; 
    const page = this.dataset.page;

    const requests = fetch(requestUrl  + `&page=${page}`).then((res) => res.json());

    console.log(requestUrl  + `&page=${page}`);

    result.innerHTML = '';
 

    Promise.all([requests])
    .then((responses) => {
        
         responses.forEach((response) => {

            if(response.Response == 'False') {
                result.innerHTML = `<h3> ${response.Error}</h3>`;
                return;
            }

          
            if(response.totalResults > perPage) {
                const pages = buildPagination(response.totalResults, page);

                document.querySelectorAll('.pagination_div').forEach((paginanation) => {
                    paginanation.innerHTML = pages;
                })

        
                    
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

