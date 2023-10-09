let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let filmName1 = prompt('Один из последних просмотренных фильмов?', ''),
    filmRating1 = prompt('На сколько оцените его?', ''),
    filmName2 = prompt('Один из последних просмотренных фильмов?', ''),
    filmRating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[filmName1] = filmRating1;
personalMovieDB.movies[filmName2] = filmRating2;


console.log(personalMovieDB);