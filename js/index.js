'use strict';
var obj = {
  a: () => {
    console.log(this.prop);
  },
  prop: 1,
};
obj.a();
var fn = obj.a.bind(obj);
fn();

for (let i = 0; i < 10; i++) {
  setTimeout(function f() {
    console.log(i);
  });
}

// const obj1 = {
//   x: 10,
// };
// const obj2 = Object.create(obj1);
// console.log(obj2.x);

// console.log('abc' === new String('abc'));

// let a = 10;
// a.b = 10;
// console.log(a);

// setTimeout(function timeout() {
//   console.log('1');
// }, 0);
// Promise.resolve('2').then(console.log);
// console.log('3');

// const res = [5, 7, 9].slice(1);
// res.pop();
// res.push(4);
// console.log(res);
const meetupx = [
  { name: 'JS', isA: true, memb: 100 },
  { name: 'ang', isA: true, memb: 900 },
  { name: 'node', isA: false, memb: 600 },
  { name: 'react', isA: true, memb: 500 },
];
const res = meetupx =>
  meetupx
    .filter(meetup => meetup.isA)
    .reduce((meetup, sum) => sum + meetup.memb, 0);
console.log(res(meetupx));

function foo() {}
foo.x = 10;
console.log(foo.x);

const str = 'h2h40h';
const res3 = str
  .split('h')
  .map(s => s + 10)
  .filter(s => s.length < 4);
console.log(res3);

const a = {};
function clear(obj) {
  obj.x = 40;
  obj = null;
}
clear(a);
console.log(a);

const s1 = ['a', 'b', 'c'];
const s2 = ['d', 'e', 'f'];
const res = s1.concat(s2).join('+');
console.log(res);
var a = {};
(function b(a) {
  a.a = 10;
  a = null;
})(a);
console.log(a);

const obj = { x: 10, y: 20 };
const prop = Object.keys(obj).reverse().join('');
obj.xy = 30;
obj.yx = 40;
obj.x10y20 = 50;
obj.y20x10 = 60;
const res4 = obj[prop];
console.log(res4);

async function bar() {
  return Promise.resolve(10);
}
async function foo() {}
const res1 = foo();
const res2 = bar();
console.log(res1, res2);
var a = 'hello';
function b() {
  if (false) {
    vara = 'world';
  } else {
    var b = 'man';
  }
  console.log(b);
  console.log(a);
}
b();
const obj = {
  x: 10,
  y: 20,
  z: 30,
};
console.log(Object.values(obj));

const num = [-2, 4, -1, 6, 8];
console.log(num.filter(n => n > 0).map(n => n * 2));
Promise.reject('a')
  .catch(p => p + 'b')
  .catch(p => p + 'c')
  .then(p => p + 'd')
  .finally(p => p + 'e')
  .then(p => console.log(p));

var obj = {
  a: () => {},
};
// let number = 5;
// function logNumber() {
//   console.log(number);
// }
// number = 6;
// logNumber();

// const getSum = function (a, b) {
//   console.log(typeof +'4');
// };
// const result = getSum(5, 6);
// for (let i = 1; i < 5; i++) {
//   console.log(i + 1);
// }
// function foo(a, b) {
//   const [first] = a;
//   const { eng } = b;

//   console.log(`${first} ${eng}`);
// }

// const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' });
// const restorantData = {
//   menu: [
//     {
//       name: 'Salad Caesar',
//       price: '14$',
//     },
//     {
//       name: 'Pizza Diavola',
//       price: '9$',
//     },
//     {
//       name: 'Beefsteak',
//       price: '17$',
//     },
//     {
//       name: 'Napoleon',
//       price: '7$',
//     },
//   ],
//   waitors: [
//     { name: 'Alice', age: 22 },
//     { name: 'John', age: 24 },
//   ],
//   averageLunchPrice: '20$',
//   openNow: true,
// };

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);

//   copy.waitors[0] = { name: 'Mike', age: 32 };
//   return copy;
// }

// transferWaitors(restorantData);

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   if (+fDish.price.slice(0, -1) + sDish.price.slice(0, -1) < average) {
//     return 'Цена ниже средней';
//   } else {
//     return 'Цена выше средней';
//   }
// }

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[0],
//     restorantData.menu[1],
//     restorantData.averageLunchPrice,
//   ),
// );

// function isOpen(prop) {
//   let answer = '';
//   console.log(prop.openNow);
//   prop.openNow ? (answer = 'Открыто') : (answer = 'Закрыто');

//   return answer;
// }

// console.log(isOpen(restorantData));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   if (+fDish.price.slice(0, -1) + sDish.price < average) {
//     return 'Цена ниже средней';
//   } else {
//     return 'Цена выше средней';
//   }
// }

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[0],
//     restorantData.menu[1],
//     restorantData.averageLunchPrice,
//   ),
// );

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);

//   copy.waitors[0] = { name: 'Mike', age: 32 };
//   return copy;
// }

// transferWaitors(restorantData);
// function calculateVolumeAndArea(num) {
//   if (typeof num !== 'number' || num <= 0)
//     return 'При вычислении произошла ошибка';
//   const res = num * num * num;
//   const res2 = num * num * 6;
//   return `Обьем куба: ${res}, площадь всей поверхности: ${res2}`;
// }
// calculateVolumeAndArea(5);

// function getCoupeNumber(num) {
//   if (typeof num !== 'number') {
//     return 'Ошибка. Проверьте правильность введенного номера места';
//   } else if (num < 1 || num > 36) {
//     return 'Таких мест в вагоне не существует';
//   }
//   const res = num / 4;
//   return Math.ceil(res);
// }
// getCoupeNumber(35);

// function getTimeFromMinutes(num) {
//   if (!Number.isInteger(num) || num < 0) return 'Ошибка, проверьте данные';
//   const h = Math.floor(num / 60);
//   const m = num % 60;
//   let str = '';

//   switch (h) {
//     case 0:
//       str = 'часов';
//       break;
//     case 1:
//       str = 'час';
//       break;
//     case 2:
//     case 3:
//     case 4:
//       str = 'часа';
//       break;
//     default:
//       str = 'часов';
//   }
//   return `Это ${h} ${str} и ${m} минут`;
// }
// getTimeFromMinutes(600);

// function findMaxNumber(a, b, c, d) {
//   const arr = [a, b, c, d];
//   console.log(arr);
//   if (
//     typeof a !== 'number' ||
//     typeof b !== 'number' ||
//     typeof c !== 'number' ||
//     typeof d !== 'number' ||
//     arr.length < 4
//   )
//     console.log(0);

//   console.log(Math.max.apply(null, arr));
// }
// findMaxNumber(1, 2, 4, 3);

// function fib(num) {
//   let res = [0, 1];
//   // console.log()
//   for (let i = 0; i <= num - 3; i += 1) {
//     res.push(res[i] + res[i + 1]);
//   }
//   //   for (let i = 0; i <= num; i += 1) {
//   //     for (let j = 1; j <= num; j += 1) {
//   //       //   res.push(res[i] + res[j]);
//   //       console.log(res[i] + res[j]);
//   //     }
//   //   }
//   console.log(res);
// }
// fib(4);
// function fib(num) {
//   let res = [0, 1];
//   let str = '';
//   if (num < 0) return 0;
//   if (num === 0) return '0';
//   // console.log()
//   for (let i = 0; i < num - 2; i += 1) {
//     res.push(res[i] + res[i + 1]);
//   }
//   res.forEach(element => {
//     str += `${element},`;
//   });
//   console.log(str);

//   console.log(res);
// }
// fib(6);
// function fib(num) {
//   let res = [0, 1];
//   let str = '';
//   if (num === 1) return '0';
//   if (typeof num !== 'number' || num === 0) return '';

//   for (let i = 0; i < num - 2; i += 1) {
//     res.push(res[i] + res[i + 1]);
//   }
//   res.forEach(element => {
//     str += `${element}`;
//   });
//   console.log(str.split('').join(' '));
// }
// fib(6);

// const personalPlanPeter = {
//   name: 'Peter',
//   age: '29',
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%',
//     },
//     exp: '1 month',
//   },
// };

// function showExperience(plan) {
//   console.log(plan.skills.exp);
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//   const { age } = plan.age;
//   const { programmingLangs } = plan.skills;
//   let string = '';
//   for (k in programmingLangs) {
//     string += `Язык ${k} изучен на ${programmingLangs[key]}\n`;
//   }
//   return string;
// }

// showProgrammingLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   let string = '';
//   arr.length < 1 ? (string = 'Семья пуста') : (string = `Семья состоит из: `);
//   arr.forEach(m => (string += `${m} `));
//   console.log(string);
// }
// showFamily(family);

// const someString = 'This is some strange string';

// function reverse(str) {
//   const rev = str.split(' ');
//   console.log(
//     rev.forEach(element => ()
//       element.split('').reverse().join('');
//   )),
//   );
// }
// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//   if (arr.length < 1) return"Нет доступных валют"
//   const str = "Доступные валюты:\n"
//   arr.forEach(function (e, missingCurr) {
//     if (e !== missingCurr) {
//     str += `${e}\n`
//     }

//   })
//   return str
// }
// availableCurr([...baseCurrencies, ...additionalCurrencies], b)

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//   const { budget } = data;
//   const { shops } = data;
//   const { height } = data;
//   const { moneyPer1m3 } = data;
//   let space =0 ,
//     volume =0 ;

//   shops.forEach(e => {

//     space += e.width * e.length
//   })

//   volume = space * height;
//   moneyPer1m3 * volume > budget ? 'Бюджета достаточно' : 'Бюджета недостаточно'

// }
// isBudgetEnough(shoppingMallData)

// const students = [
//   'Peter',
//   'Andrew',
//   'Ann',
//   'Mark',
//   'Josh',
//   'Sandra',
//   'Cris',
//   'Bernard',
//   'Takesi',
//   'Sam',
//   'Takesi',
// ];

// function sortStudentsByGroups(arr) {
//   const sort = arr.sort();
//   // console.log(sort);
//   const groups = [[], [], []];
//   const rest = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i < 3) {
//       groups[0].push(sort[i]);
//     } else if (i < 6) {
//       groups[1].push(sort[i]);
//     } else if (i < 9) {
//       groups[2].push(sort[i]);
//     } else {
//       console.log(sort[i]);
//       rest.push(sort[i]);
//     }
//   }
//   console.log([
//     ...groups,
//     `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(',')}`,
//   ]);
//   return [
//     ...groups,
//     `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(',')}`,
//   ];
// }
// sortStudentsByGroups(students);
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
