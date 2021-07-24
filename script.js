'use strict';

// **** Task-1 ****
// Condition:
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]
//
// Solution:
// function countSmileys(arr) {
//   return arr.filter(v=>v.match(/(:|;)(-|~)?(\)|D)/)).length
// }
// countSmileys([':)', ';(', ';}', ':-D']);       // ==> return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // ==> return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); //  ==> return 1;

// **** Task-2 ****
// function solution(str, ending) {
//    return str.endsWith(ending);
// }

// console.log(solution('abc', 'bc'));
// console.log(solution('abcde', 'abc'));
// console.log(solution('sumo', 'omo'));

// **** Task-3****
// Отсортировать от меньшего кол-ва букв к большему
// function sortByLength(array) {
//    return array.sort((a, b) => {
//       return a.length - b.length;
//    });
// }
// console.log(sortByLength(['Beg', 'Life', 'I', 'To']));

// **** Task-4****
// function findSum(n) {
//   let sum = 0;
//    for (let i = 0; i <= n; i++) {
//       if (i % 3 == 0 || i % 5 == 0) {
//          sum += i;
//       }
//    }
//   return sum;
// }
// findSum(5);
// **** Task-5****
// function oddOrEven(array) {
//    if (array.length > 0) {
//       let b = array.reduce((accum, elem) => accum + elem);
//       if (b % 2 === 0) {
//          return 'even';
//       }
//       return 'odd';
//    } else if (array.length == 0) {
//       return 'even';
//    }
// }
// console.log(oddOrEven([0, 3, -4]));

// **** Task-6****
// function getSum(a, b) {
//    let max = Math.max(a, b);
//    let min = Math.min(a, b);
//    let sum = 0;
//    if (a != b) {
//       for (let i = min; i < max + 1; i++) {
//          sum += i;
//       }
//       return sum;
//    } else if (a == b) {
//       return a;
//    }
// }

// **** Task-7 - Square Every Digit****
// function squareDigits(num) {
//   let arr = String(num).split('');
//   return parseFloat(arr.map(item => item ** 2).join(''));
// }
// console.log(squareDigits(3212));

// **** Task-8 - Exes and Ohs****
// function XO(str) {
//   let arr = str.toLowerCase().split('');

//   let x = 0;
//   let o = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'o') {
//       o += 1;
//     } else if (arr[i] === 'x') {
//       x += 1;
//     }
//   }
//   return x == o ? true : false;
// }
// console.log(XO('Oo'));

// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

// **** Task-9 - Form The Minimum****
// function minValue(values) {
//   let arr = [...new Set(values)];

//   return parseInt(arr.sort((a, b) => a - b).join(''));
// }
// minValue([4, 7, 5, 7]);
