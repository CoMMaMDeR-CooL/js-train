'use strict';

function calculateVolumeAndArea(num) {
  if (typeof num !== 'number' || num <= 0)
    return 'При вычислении произошла ошибка';
  const res = num * num * num;
  const res2 = num * num * 6;
  return `Обьем куба: ${res}, площадь всей поверхности: ${res2}`;
}
calculateVolumeAndArea(5);

function getCoupeNumber(num) {
  if (typeof num !== 'number') {
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (num < 1 || num > 36) {
    return 'Таких мест в вагоне не существует';
  }
  const res = num / 4;
  return Math.ceil(res);
}
getCoupeNumber(35);

function getTimeFromMinutes(num) {
  if (!Number.isInteger(num) || num < 0) return 'Ошибка, проверьте данные';
  const h = Math.floor(num / 60);
  const m = num % 60;
  let str = '';

  switch (h) {
    case 0:
      str = 'часов';
      break;
    case 1:
      str = 'час';
      break;
    case 2:
    case 3:
    case 4:
      str = 'часа';
      break;
    default:
      str = 'часов';
  }
  return `Это ${h} ${str} и ${m} минут`;
}
getTimeFromMinutes(600);

function findMaxNumber(a, b, c, d) {
  const arr = [a, b, c, d];
  console.log(arr);
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    typeof c !== 'number' ||
    typeof d !== 'number' ||
    arr.length < 4
  )
    console.log(0);

  console.log(Math.max.apply(null, arr));
}
findMaxNumber(1, 2, 4, 3);

function fib(num) {
  let res = [0, 1];
  // console.log()
  for (let i = 0; i <= num - 3; i += 1) {
    res.push(res[i] + res[i + 1]);
  }
  //   for (let i = 0; i <= num; i += 1) {
  //     for (let j = 1; j <= num; j += 1) {
  //       //   res.push(res[i] + res[j]);
  //       console.log(res[i] + res[j]);
  //     }
  //   }
  console.log(res);
}
fib(4);
function fib(num) {
  let res = [0, 1];
  let str = '';
  if (num < 0) return 0;
  if (num === 0) return '0';
  // console.log()
  for (let i = 0; i < num - 2; i += 1) {
    res.push(res[i] + res[i + 1]);
  }
  res.forEach(element => {
    str += `${element},`;
  });
  console.log(str);

  console.log(res);
}
fib(6);
function fib(num) {
  let res = [0, 1];
  let str = '';
  if (num === 1) return '0';
  if (typeof num !== 'number' || num === 0) return '';

  for (let i = 0; i < num - 2; i += 1) {
    res.push(res[i] + res[i + 1]);
  }
  res.forEach(element => {
    str += `${element}`;
  });
  console.log(str.split('').join(' '));
}
fib(6);
// const sayHello = name => {
//   console.log(name);
//   return `Привет, ${name}!`;
// };
// sayHello('dima');
// function getMathResult(a, b) {
//   if (typeof b !== 'number' || b <= 0) return a;
//   let result = '';
//   for (let i = 1; i <= b; i += 1) {
//     if (i === b) {
//       result += `${a * i}`;
//     } else {
//       result += `${a * i}---`;
//     }
//   }
//   return result;
// }
// getMathResult(5, 3);

//   const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = data.length - 1; i >= 0; i -= 1){
//     console.log(i)
//     result.push(data[i])

// }
// const usdCurr = 28;// console.log(result)
// const eurCurr = 32;
// function convert(amount, curr) {
//     console.log(curr *amount)
// }
// convert(500, usdCurr)
// convert(500, eurCurr)

// // Место для первой задачи
// // function firstTask() {

// //     for (let i = 5; i <= 10; i += 1) {
// //         console.log(i)
// //     }
// //     for (let j = 20; j >= 10; j -= 1) {
// //         if(j===13) break
// //         console.log(j)
// //     }
// //     for (let k = 2; k <= 10; k += 2){
// //         console.log(k)
// //     }

// //     // Пишем решение вот тут

// // }
// // firstTask()
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     arr.forEach(element => {
//         result.push(element)
//     });
//     console.log(result)

//     // Пишем решение вот тут

//     // Не трогаем
//     return result;
// }
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     data.forEach(e => {
//         if (typeof(e) === 'number') {
//              data.e = e * 2;
//             // console.log(e)

//         }
//         // console.log(typeof(e))
//         console.log(e)
//         return e += ' - done'

//     })
//     console.log(data)
//     // Пишем решение вот тут

//     // Не трогаем
//     return data;
// }
// secondTask();

//     let i = 2;
//     while (i <= 16) {
//          if (i % 2 === 0) {
//        continue
//     } else {
//         console.log(i)
//    }
//     }
//     i += 1;
// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i <= 10; i += 1){
//         arrayOfNumbers.push(i)
//     }

//     // Пишем решение вот тут

//     // Не трогаем
//     return arrayOfNumbers;
// }
// fifthTask()

// //*
// //**
// //***
// //****
// //*****
// //******
// // let result = '';
// // const length = 7;

// // for (let i = 1; i < length; i++) {
// //     for (let j = 0; j < i; j++) {
// //         result += '*';

// //     }
// //     result += '\n';
// // }

// // console.log(result)

// // const burger = true;
// // const fries = true;

// // if (burger && fries) {
// //     console.log("gooood")
// // }
// // console.log(burger && fries)
// // const burger = 3;
// // const fries = 1;
// // const cola = 1;

// // console.log(burger === 3 && cola  && fries)

// // if (burger === 3 && cola  && fries ) {
// //     console.log("gooood x 2")
// // } else {
// //     console.log('moove along')
// //   }
// // const burger = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 2;

// // if (burger ===3 && cola === 2   || fries === 3 && nuggets) {
// //     console.log("gooood x 3")
// // } else {
// //     console.log('moove along')
// // }
// // for (let i = 0; i < 3; i++) {
// //     console.log(i);
// //     for (let j = 0; j < 3; j++) {
// //     console.log(j);
// // }
// // }
// // console.log(NaN || 2 || undefined) //2
// // console.log(NaN && 2 && undefined) // Nan
// // console.log(1 && 2 && 3) // 3
// // console.log(!1 && 2 && !3) // 1 false
// // console.log(25 || null && !3) // 25
// // console.log(NaN || null || !3 || undefined || 5) // 5
// // console.log(NaN || null && !3 && undefined || 5);//5
// // console.log( 5 === 5 && 3 > 1 || 5);// true
// // const hamburger = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger === 3 && cola || fries === 3 && nuggets) {
// //    console.log('Done!')
// // } //done
// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger || cola || fries === 3 || nuggets) {
// //    console.log('Done!')
// // }
// //done
// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger && cola || fries === 3 && nuggets) {
// //    console.log('Done!')
// // }
// // nothing

// // let johnReport, samReport, alexReport = 'done';
// // console.log(johnReport||samReport|| alexReport)

// // const secretNumber = Math.round(Math.random() * 100 + 1);
// // // console.log('secretNumber', secretNumber);
// // let userNumber;
// // console.log('userNumber', userNumber);
// // do {
// //     console.log('userNumber', userNumber);
// //      userNumber = Number.parseInt(prompt('Enter Number'));
// //     if (secretNumber === userNumber) {
// //         console.log('You Won!')
// //     }
// //     if (secretNumber > userNumber) {
// //         console.log('x >', userNumber);

// //     } else if (secretNumber < userNumber) {
// //         console.log('x <', userNumber);

// // const numberOfFilms = +prompt('daj film','');
// // console.log(numberOfFilms);

// // const personalMovieDB = {
// //     count: numberOfFilms,
// //     movies : {},
// //     actors : {},
// //     genres: [],
// //     privat : false,

// // };
// // const movieNameA = prompt('nazvanie', ''),
// //     movieRatingA = +prompt('ocenka', ''),
// //     movieNameB = prompt('nazvanie', ''),

// //     movieRatingB = +prompt('ocenka', '');
// // personalMovieDB.movies[movieNameA] = movieRatingA;
// // personalMovieDB.movies[movieNameB] = movieRatingB;
// // console.log(personalMovieDB);
