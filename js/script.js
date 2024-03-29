'use strict';


const personalMovieDB = {
	count: 0,
	muvies:{},
	actors:{},
	genres:[],
	privat: false,
	start: function() {
		personalMovieDB.count =  +prompt('Сколько фильмов вы уже посмотрели?','');
		while ( personalMovieDB.count== '' ||  personalMovieDB.count == null ||  isNaN( personalMovieDB.count) ) {
			personalMovieDB.count =  +prompt('Сколько фильмов вы уже посмотрели?','');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++){
			const a = prompt('Один из последних просмотренных фильмов', ''),
				b = prompt('На сколько оцените его?', '');
            
			if (a != null && b != null & a != '' && b != '' && a.length < 50) {
				personalMovieDB.muvies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
		if ( personalMovieDB.count < 10){
			console.log('Вы посмотрели довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
			console.log('Вы класный зритель');
		} else if (personalMovieDB.count >= 30){
			console.log('Вы киноман');
		}else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function(){
		if (personalMovieDB.privat){
			personalMovieDB.privat = false;
		}else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++){
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
		}
	}
};

