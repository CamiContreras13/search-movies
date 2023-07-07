document.getElementById('searchButton').addEventListener('click',searchMovies);
let api_key = 'a80c44286a7f1823644544c9be9a456f';
let url = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w200';

let resultContainer = document.getElementById('results');

function searchMovies(){
    resultContainer.innerHTML = 'Loading... 🤹🏽‍♀️';

    let searchInput = document.getElementById('searchInput').value;
    fetch(`${url}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response =>displayMovies(response.results));
};

function displayMovies(movies){

    resultContainer.innerHTML = '';

    if(movies.length === 0){
        resultContainer.innerHTML = '<p> There are no results for your search</p>';
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        let title = document.createElement('h2');
        title.textContent = movie.title;

        let releaseDate = document.createElement('p');
        releaseDate.textContent = 'The release date was: ' + movie.release_date;

        let overview = document.createElement('p');
        overview.textContent = movie.overview;

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img');
        poster.src = posterPath;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);

        resultContainer.appendChild(movieDiv);
    });

}