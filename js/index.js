'use strict';
// const secretNumber = Math.round(Math.random() * 100 + 1);
// // console.log('secretNumber', secretNumber);
// let userNumber;
// console.log('userNumber', userNumber);
// do {
//     console.log('userNumber', userNumber);
//      userNumber = Number.parseInt(prompt('Enter Number'));
//     if (secretNumber === userNumber) {
//         console.log('You Won!')
//     }
//     if (secretNumber > userNumber) {
//         console.log('x >', userNumber);


//     } else if (secretNumber < userNumber) {
//         console.log('x <', userNumber);



// const numberOfFilms = +prompt('daj film','');
// console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies : {},
//     actors : {},
//     genres: [],
//     privat : false,
    

// };
const movieNameA = prompt('nazvanie', ''),
    movieRatingA = +prompt('ocenka', ''),
    movieNameB = prompt('nazvanie', ''),
    
    movieRatingB = +prompt('ocenka', '');
personalMovieDB.movies[movieNameA] = movieRatingA;
personalMovieDB.movies[movieNameB] = movieRatingB;
console.log(personalMovieDB);
 

