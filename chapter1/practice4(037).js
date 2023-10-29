

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let filmName = prompt('Один из последних просмотренных фильмов?', '');
            let filmRating = prompt('На сколько оцените его?', '');
            if (filmName.length > 50 || filmName.length < 1 || filmRating.length < 1) {
                i--;
                continue;
            }
            personalMovieDB.movies[filmName] = filmRating;
        }
    },
    detectPerdonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if (personalMovieDB.genres[i] === null || personalMovieDB.genres[i] === '') {
                i--;
            }
        }
        personalMovieDB.genres.forEach(function (val, num) {
            console.log(`Любимый жанр #${num + 1} - это ${val}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        }

    }
};

personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPerdonalLevel();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();



