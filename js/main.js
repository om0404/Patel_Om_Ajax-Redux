
function getCharacters() {
    const characterList = document.querySelector("#character-list ul");
    const loadingIcon = document.querySelector("#loading-icon");

    loadingIcon.style.display = 'block';

    fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
            loadingIcon.style.display = 'none';
            displayCharacters(data.results, characterList);
        })
        .catch(error => {
            console.error('Error:', error);
            loadingIcon.style.display = 'none';
            
        });
}

function displayCharacters(characters, characterList) {
    characters.forEach(character => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "#";
        a.textContent = character.name;
        a.addEventListener('click', () => getMovieDetails(character));
        li.appendChild(a);
        characterList.appendChild(li);
    });
}

function getMovieDetails(character) {
    const movieDetails = document.querySelector("#movie-details");
    const loadingIcon = document.querySelector("#loading-icon");

    loadingIcon.style.display = 'block';

    
    const fictionalMovies = [
        { title: 'Space Adventure', opening_crawl: 'In a galaxy far, far away...' },
        { title: 'Alien Invasion', opening_crawl: 'Earth is under attack by extraterrestrial beings...' },
        { title: 'Robot Uprising', opening_crawl: 'Machines have rebelled against their human creators...' }
    ];

    
    const randomMovie = fictionalMovies[Math.floor(Math.random() * fictionalMovies.length)];

   
    setTimeout(() => {
        loadingIcon.style.display = 'none';
        displayMovieDetails(randomMovie, movieDetails);
    }, 1000);
}

function displayMovieDetails(movie, movieDetails) {
    movieDetails.style.display = 'block';
    movieDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.opening_crawl}</p>
        <img src="./images/fictional_movie_poster.jpg" alt="${movie.title} Poster">
    `;
}


getCharacters();
