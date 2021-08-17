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

// **** Task-3 ****
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
// **** Task-5 ****
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

// **** Task-6 ****
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

// **** Task-7 - Square Every Digit ****
// function squareDigits(num) {
//   let arr = String(num).split('');
//   return parseFloat(arr.map(item => item ** 2).join(''));
// }
// console.log(squareDigits(3212));

// **** Task-8 - Exes and Ohs ****
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

// **** Task-9 - Form The Minimum ****
// function minValue(values) {
//   let arr = [...new Set(values)];

//   return parseInt(arr.sort((a, b) => a - b).join(''));
// }
// minValue([4, 7, 5, 7]);

// **** Task-10 - Highest and Lowest ****
// function highAndLow(numbers) {
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
// highAndLow('1 2 3 4 5');

// **** Task-11 - Sort Numbers ****
// function solution(nums) {
//   if (nums) {
//     return nums.sort(function (a, b) {
//       return a - b;
//     });
//   } else {
//     return [];
//   }
// }

// function solution(nums){
//   return (nums || []).sort(function(a, b){
//     return a - b
//   });
// }
// console.log(solution([1, 2, 10, 50, 5])); // should return [1,2,5,10,50]
// solution(null); // []

// **** Task-12 - Friend or Foe? ****
// function friend(friends) {
//   return friends.filter(item => item.length === 4);
// }
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// **** Task-13 - Friend or Foe? ****

// function pigIt(str) {
//   let arr = [];
//   let newStr = str.split(' ');
//   for (var i = 0; i < newStr.length; i++) {
//     if (newStr[i].length > 1) {
//       let firstLetter = newStr[i].slice(0, 1);
//       let newWord = newStr[i].slice(1) + firstLetter + 'ay';
//       arr.push(newWord);
//     } else {
//       arr.push(newStr[i] + 'ay');
//     }
//   }
//   console.log(arr.join(' '));
//   // return arr.join(' ');
// }
// pigIt('O emporatay o oresmay !');

// **** Task-14  ****
// const sort = word => word.split('').sort().join('');
// function anagrams(word, words) {
//    let token = sort(word);

//    return words.filter(w => sort(w) === token);
// }
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

// **** Task-15 - Valid Brackets ****

// function isValid(arr) {
//   let stack = [];
//   let brackets = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   };

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (closedBracket(element)) {
//       if (brackets[element] !== stack.pop()) return false;
//     } else {
//       stack.push(element);
//     }
//   }

//   return stack.length === 0;
// }

// function closedBracket(element) {
//   return [')', '}', ']'].indexOf(element) > -1;
// }
// console.log(isValid('(){[]}'));

// **** Task-16 - Reverse words ****
// function reverseWords(str) {
//   let newStr = str.split(' ').map(item => {
//     return item.split('').reverse().join('');
//   });

//   return newStr.join(' ');
// }
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

// **** Task-17 - Sorted? yes? no? how? ****
// 1. Чтобы скопировать массива можно использовать slice()
// 2. Чтобы сравнить два массива по значениям можно использовать join('')

// function isSortedAndHow(array) {
//   const arr = array.slice().sort((a, b) => a < b);
//   const arr2 = array.slice().sort((a, b) => a - b);
//   if (array.join('') == arr2.join('')) return 'yes, ascending';
//   if (array.join('') == arr.join('')) return 'yes, descending';
//   return 'no';
// }
// console.log(isSortedAndHow([1, 2, 12]));
// console.log(isSortedAndHow([15, 7, 3, -8]));

// const isSortedAndHow = array => {
//   let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
//   let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;

//   return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no';
// };

// **** Task-18 - Split Strings****

// function solution(str) {
//   return str.length > 0
//     ? str.match(/.{1,2}/g).map(item => {
//         return item.length == 2 ? item : item + '_';
//       })
//     : [];
// }

// console.log(solution('abc'));
// console.log(solution('abcdef'));

// **** Task-19 - Duplicate Encoders****
// function duplicateEncode(word) {
//   let res = [];
//   let arr = word.toLowerCase().split('');
//   for (let i = 0; i < arr.length; i++) {

//   }
//   return res;
// }
// console.log(duplicateEncode('Recede'));

// **** Task-20 - Isograms****
// function isIsogram(str) {
//   const isIsogram = str => !str.match(/(.).*\1/i);
// }
// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('aba'));
// console.log(isIsogram('moOse'));

// **** Task-21 - Replace With Alphabet Position ****
// const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v','w','x','y','z',];
// function alphabetPosition(text) {
//   let str = text.toLowerCase().split('');
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] != ' ' && arr[j] === str[i]) {
//         res.push(j + 1);
//       }
//     }
//   }
//   return res.join(' ');
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// **** Task-22 - Unique In Order ****
// var uniqueInOrder = function (iterable) {
//   const array = Array.isArray(iterable) ? iterable : iterable.split('');
//   return array.filter((item, index) => {
//     return item != array[index + 1];
//   });
// };
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// **** Task-23 - Delete occurrences of an element if it occurs more than n times ****

// function deleteNth(arr, x) {
//   var cache = {};
//   return arr.filter(function (n) {
//     cache[n] = (cache[n] || 0) + 1;
//     return cache[n] <= x;
//   });
// }
// console.log(deleteNth([20, 37, 20, 21], 1));
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

// **** Task-24 - Reverse every other word in the string ****

// function reverse(str) {
//   return str
//     .trim()
//     .split(' ')
//     .map((item, index) => (index % 2 != 0 ? item.split('').reverse().join('') : item))
//     .join(' ');
// }
// console.log(reverse('Reverse this string, please!'));

// **** Task-25 - Not very secure ****
// function alphanumeric(string) {
//   return /^[A-Za-z0-9]+$/.test(string.toLowerCase().trim());
// }
// console.log(alphanumeric('Mazinkaiser'));
// console.log(alphanumeric('ySOMrsY84K!_iLb1!1xqMM5EiIn'));

// **** Task-26 - Where my anagrams at? ****
// function anagrams(word, words) {
//   let res = [];
//   let newWord = word.split('').sort().join('');
//   let newWords = words.map(item => {
//     let word = item.split('').sort().join('');
//     if (word === newWord) res.push(item);
//   });
//   return res;
// }
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));

// **** Task-27 - Perimeter of squares in a rectangle **** !!!! ДОРЕШАТЬ !!!!!
// function perimeter(a, n) {
//   function fib(n) {
//     if (n < 2) {
//       return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// console.log(perimeter(10, 7));

// **** Task-28 - Extract the domain name from a URL ****
// function domainName(url) {
//   return url.replace(/.+\/\/|www.|\..+/g, '');
// }
// console.log(domainName('http://google.com'));
// console.log(domainName('http://google.co.jp'));
// console.log(domainName('www.xakep.ru'));

// **** Task-29 - Write out numbers ****  !!!! ДОРЕШАТЬ !!!!!
// function number2words(n) {
//   let res = [];
//   const numbers = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
//   };

//   let newNumber = n.toString().split('');
//   for (const key in numbers) {
//     for (let i = 0; i < newNumber.length; i++) {
//       const element = newNumber[i].toString();
//       if (key === element) {
//         res.push(numbers[key]);
//       }
//     }
//   }
//   return res;
// }
// console.log(number2words(99));

// **** Task-29 - Regex Password Validation ****
// function validate(password) {
//   return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
// }

// **** Task-30 - Sum of pairs ****

// function sumPairs(inits, s) {
//   let res = [];
//   for (let i = 0; i < inits.length; i++) {
//     const element = inits[i];
//     for (let j = i + 1; j < inits.length + 1; j++) {
//       if (element + inits[j] === s) {
//         res.push([element, inits[j], j - i]);
//       }
//     }
//     continue;
//   }
//   let resIndex = Infinity;
//   for (let s = 0; s < res.length; s++) {
//     const element = res[s];
//     if (element[2] < resIndex) {
//       resIndex = element[2];
//     }
//   }
//   for (let k = 0; k < res.length; k++) {
//     const element = res[k];
//     if (resIndex === element[2]) {
//       return element.splice(0, 2);
//     } else if (res.length === 0) {
//       return undefined;
//     }
//   }
// }
// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
// console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));

// **** Task-31 - Adding Big Numbers ****
// function add(a, b) {
//   let res = '',
//     c = 0;
//   a = a.split('');
//   b = b.split('');
//   while (a.length || b.length || c) {
//     c += ~~a.pop() + ~~b.pop();
//     res = (c % 10) + res;
//     c = c > 9;
//   }
//   return res;
// }

// console.log(add('63829983432984289347293874', '90938498237058927340892374089'));

// **** Task-32 - Intersection of two Arrays  ****
// const arr1 = [1, 1, 1, 2, 3, 5, 5];
// const arr2 = [1, 2, 3, 1, 5];

// function intersect(arr1, arr2) {
//   const res = [];

//   loop1: for (let i = 0; i < arr1.length + 1; ++i) {
//     const item = arr1[i];
//     for (let j = 0; j < arr2.length; j++) {
//       const element = arr2[j];
//       if (item !== element) continue;
//       if (item === element && item !== undefined) {
//         res.push(item);
//         delete arr2[j];
//       }
//       continue loop1;
//     }
//   }
//   return res;
// }
// console.log(intersect(arr1, arr2));

// function intersect(arr1, arr2) {
//   let res = [];

//   let map = arr1.reduce((acc, i) => {
//     acc[i] = acc[i] ? acc[i] + 1 : 1;
//     return acc;
//   }, {});

//   for (let i = 0; i < arr2.length; i++) {
//     const element = arr2[i];
//     let count = map[element];

//     if (count && count > 0) {
//       res.push(element);
//       map[element] -= 1;
//     }
//   }
//   return res;
// }
// console.log(intersect(arr1, arr2));

// **** Task-32 -  First Unique Element in the String  ****

// function firstUniqChar(str) {
//   let map = new Map();

//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];

//     if (map.has(element)) {
//       map.set(element, map.get(element) + 1);
//     } else {
//       map.set(element, 1);
//     }
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (map.get(str[i]) === 1) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(firstUniqChar('ddnnnnsfsfoollff'));
