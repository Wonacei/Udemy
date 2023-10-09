let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    let filmName = prompt('Один из последних просмотренных фильмов?', '');
    let filmRating = prompt('На сколько оцените его?', '');
    if (filmName.length > 50 || filmName.length < 1 || filmRating.length < 1) {
        i--;
        continue;
    }
    personalMovieDB.movies[filmName] = filmRating;
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);