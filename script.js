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
//   console.log(arr);

//   return parseInt(arr.sort((a, b) => a - b).join(''));
// }
// console.log(minValue([4, 7, 5, 7]));

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
// function perimeter(n) {
//   if (n < 2) {
//     return 1;
//   }
//   return perimeter(n - 2) + perimeter(n - 2);
// }

// console.log(perimeter(7));

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

//   console.log(map);

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

// **** Task-33 -  Матрица ****

// let grid1 = [
//   ['1','1','1','1','0']
//   ['1','1','0','1','0']
//   ['1','1','0','0','0']
//   ['0','0','0','0','0']
// ]

// let grid2 = [
//   ['1','1','0','0','0']
//   ['1','1','0','0','0']
//   ['0','0','1','0','0']
//   ['0','0','0','1','1']
// ]

// function numIsLands(grid) {

// }

// **** Task-34 -  Palindrome   ****

// function palindrom(str) {
//   str = str.toLowerCase().replace(/\s/g, '');
//   return str === str.split('').reverse().join('');
// }

// console.log(palindrom('racecar'));
// console.log(palindrom('table'));
// console.log(palindrom('Анна'));
// console.log(palindrom('А роза упала на лапу Азора'));

// **** Task-35 - fizzBuzz  ****

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//       continue;
//     }
//     if (i % 3 === 0) {
//       console.log('fizz');
//       continue;
//     }
//     if (i % 5 === 0) {
//       console.log('buzz');
//       continue;
//     }
//     console.log(i);
//   }
// }
// fizzBuzz(15);

// **** Task-36 - Find Vowels ****
// function isVowelRegEx(char) {
//   let filt = [...char].filter(item => /[aeiou]/.test(item));
//   return filt.length;
// }
// console.log(isVowelRegEx('helloaaa'));

// **** Task-37 - Fibonacci ****

// function fib(n) {
//   if (n < 2) return 1;
//   return fib(n - 1) + fib(n - 1);
// }

// console.log(fib(10));

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   let res = [1, 1];
//   for (let i = 3; i < n; i++) {
//     let c = a + b;
//     res.push(c);
//     a = b;
//     b = c;
//   }
//   return res;
// }
// console.log(fib(10));

// **** Task-36 - Class Names ****
// let classNames = [
//   'header',
//   'menu',
//   'menu-item',
//   'menu-item',
//   'footer',
//   'menu',
//   'link',
//   'link',
//   'link',
//   'link',
// ];
// let map = classNames.reduce((accum, item) => {
//   accum[item] = accum[item] ? accum[item] + 1 : 1;
//   return accum;
// }, {});

// let res = Object.keys(map).sort((a, b) => map[b] - map[a]);
// console.log(res);

// **** Task-36 - Currencies ****
// const input = [
//   ['usd', 'buy', 10000],
//   ['usd', 'sell', 5000],
//   ['gbp', 'buy', 9000],
//   ['gbp', 'buy', 1000],
//   ['eur', 'buy', 7000],
//   ['uah', 'buy', 10000],
//   ['usd', 'sell', 25000],
// ];

// let map = input.reduce((accum, item) => {
//   let [currency, type, value] = item;
//   if (!accum[currency]) {
//     accum[currency] = [0, 0];
//   }

//   accum[currency][type === 'buy' ? 0 : 1] += value;
//   return accum;
// }, {});
// console.log(map);

// **** Task-37 - Maze **** ---- ДОРЕШАТЬ!

// let maze = [
//   [1, 1, 1, 0, 0, 1],
//   [1, 1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0],
// ];

// function checkPath(x, y) {}
// console.log(checkPath({ x: 3, y: 0 }, { x: 5, y: 5 }));

// **** Task-37 - Уникализация значений в массиве. ****

// ---- 1 способ ---
// function unique(arr) {
//   let res = [];
//   arr.forEach(item => {
//     if (res.indexOf(item) === -1) {
//       res.push(item);
//     }
//   });

//   return res;
// }
// console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]));

// ---- 2 способ ---
// indexOf - ищет ПЕРВЫЙ индекс элемента  и если есть совпадения то у последующих будет индекс первого вхождения
// function uniqueValuesOfArray(arr) {
//   return arr.filter((item, index) => {
//     return index === arr.indexOf(item);
//   });
// }
// console.log(uniqueValuesOfArray([1, 1, 2, 25, 9, 3, 24, 25]));

// ---- 3 способ ---
// function uniqueValuesOfArray(arr) {
//   // return [...new Set(arr)];
//   // return Array.from(new Set(arr));
// }
// console.log(uniqueValuesOfArray([1, 1, 2, 25, 9, 3, 24, 25]));

// ---- 4 способ ---
// function uniqueValuesOfArray(arr) {
//   return arr.reduce((accum, item) => {
//     return accum.includes(item) ? accum : [...accum, item];
//   }, []);
// }
// console.log(uniqueValuesOfArray([1, 1, 2, 25, 9, 3, 24, 25]));

// **** Task-37 -  «Расплющивание» массива. ****
// flat([1, [2, [3, [4,5]]]]); // => [1, 2, 3, 4, 5]
// Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
// var newArray = arr.flat(depth);
// console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(Infinity)) - [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// **** Task-38 -  Бинарный поиск  ****
// ПОМОГАЕТ ИСКАТЬ НУЖНЫЕ ДАННЫЕ В БОЛЬШИХ МАССИВАХ
// Бинарный поиск позволяет выполнять поиск в отсортированном массиве путем многократного разбиения массива пополам. Бинарный поиск выполняется путем проверки того, является ли искомое значение больше, меньше или равно среднему значению в нашем массиве: Если оно меньше, мы можем удалить правую половину массива.

// let search = function (nums, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid;

//   while (left <= right) {
//     mid = Math.round((right - left) / 2 + left);

//     if (target === arr[mid]) {
//       return mid;
//     } else if (target < nums[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return -1;
// };

// const arr = [-2000, -20, -4, -1, 0, 3, 10, 15, 22, 40, 100, 1000, 10000000];

// console.log(search(arr, 1000));

// **** Task-39 -  Find the odd int  ****

// function findOdd(arr) {
//   let map = arr.reduce((acc, item) => {
//     acc[item] = acc[item] ? acc[item] + 1 : 1;
//     return acc;
//   }, {});
//   for (const key in map) {
//     if (map[key] % 2 != 0) return +key;
//   }
// }
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// const findOdd = xs => xs.reduce((a, b) => a ^ b);
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// **** Task-40 -  Multiples of 3 or 5 ****

// function solution(number) {
//   let sum = 0;
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       sum += i;
//     }
//     return sum;
//   }
//   return 0;
// }

// **** Task-41 -  Valid Parentheses ****

// function validParentheses(parens) {
//   let n = 0;
//   for (let i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }

//   return n == 0;
// }
// console.log(validParentheses('((()))'));

// **** Task-41 -  Simple Pig Latin ****
// function pigIt(str) {
//   let arr = [];
//   let newStr = str.split(' ');
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i].length > 1) {
//       let firstLetter = newStr[i].slice(0, 1);
//       let newWord = newStr[i].slice(1) + firstLetter + 'ay';
//       arr.push(newWord);
//     } else if (newStr[i].length === 1 && /^[A-Za-z]+$/.test(newStr[i])) {
//       arr.push(newStr[i] + 'ay');
//     } else {
//       arr.push(newStr[i]);
//     }
//   }
//   return arr.join(' ');
// }
// console.log(pigIt('P latin is cool !'));

// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
//   });
// }

// **** Task-42 -  RGB To Hex Conversion ****
// function rgb(r, g, b) {
//   const convert = function(val) {
//     if(val < 0) {
//       return '00';
//     }
//     if(val > 255) {
//       return 'FF';
//     }
//     return (val > 15 ? val.toString(16) : '0' + val.toString(16)).toUpperCase();
//   }
//   return convert(r) + convert(g) + convert(b);
// }

// console.log(rgb(255, 0, 255));
// console.log(rgb(0, 0, -20));
// console.log(rgb(1734, 255, 47));
// console.log(rgb(300, 255, 255));
// console.log(rgb(201, 3, 56));
// console.log(rgb(33, 13, 53));

// **** Task-43 -  Scramblies **** -----Дорешать

// function scramble(str1, str2) {
//   let res = [];
//   let newStr1 = str1.split('');
//   for (let i = 0; i < newStr1.length; i++) {
//     const element1 = newStr1[i];
//     for (let j = 0; j < str2.length; j++) {
//       const element2 = str2[j];
//       if (element1 === element2) {
//         res.push(element2);
//         delete newStr1[i];
//         str2.slice(j, 1);
//       }
//       continue;
//     }
//   }
//   return res.length === str2.length;
// }

// console.log(scramble('cedewaraaossoqqyt', 'codewars'));

// **** Task-44 -  Карирование ****

// function sum(a) {
//   console.log(a);
//   return function (b) {
//     return sum(a + b);
//   };
// }
// sum(1)(5)(10);
// sum(1)(5)(10)(12);

// **** Task-44 -  Merge keys of object ****

// ---- 1 способ ---
// let obj1 = {
//   name: 'Kostya',
//   age: 12,
//   type: 'HUMAN',
// };

// let obj2 = {
//   name: 'Misha',
//   age: 30,
//   typeeee: 'HUMAN',
// };

// const mergeKeysOfObjects = (obj1, obj2) => {
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   for (let i = 0; i < keys1.length; i++) {
//     const key1 = keys1[i];
//     for (let k = 0; k < keys2.length; k++) {
//       const key2 = keys2[k];

//       if (key1 === key2) {
//         console.log(key1, key2);
//         obj1[key1] = obj2[key2];
//       }
//     }
//   }
//   return obj1;
// };

// console.log(mergeKeysOfObjects(obj1, obj2));

// ---- 2 способ ---

// const mergeKeysOfObjects = (obj1, obj2) => {
//   for (const key in obj1) {
//     if (obj2.hasOwnProperty(key)) {
//       obj1[key] = obj2[key];
//     }
//   }
//   return obj1;
// };
// console.log(mergeKeysOfObjects(obj1, obj2));

// **** Task-45 -  group By ****

// const arr = [6.1, 4.2, 5.3, 6.3, 5.2];
// const callBack = Math.ceil;

// const groupBy = (arr, callBack) => {
//   let map = arr.reduce((accum, item) => {
//     let item2 = callBack(item);
//     accum[item2] = accum[item2] ? [...accum[item2], item].sort() : [item];
//     return accum;
//   }, {});
//   return map;
// };

// console.log(groupBy(arr, callBack));

// **** Task-45 -  Math Issues ****

// ---- 1 способ ---
// let round = function (number) {
//   let numStr = String(number);
//   let dot = numStr.indexOf('.');
//   let strNumber = +String(number + 1).slice(0, dot);
//   let dif = strNumber - number;
//   if (dot === -1) {
//     return number;
//   }

//   if (dif <= 0.5) {
//     return +String(number + 1).slice(0, dot);
//   } else {
//     return +String(number).slice(0, dot);
//   }
// };

// let ceil = function (number) {
//   let numStr = String(number);
//   let dot = numStr.indexOf('.');
//   return dot > -1 ? +String(number + 1).slice(0, dot) : number;
// };

// let flooor = function (number) {
//   let numStr = String(number);
//   let dot = numStr.indexOf('.');
//   return dot > -1 ? +numStr.slice(0, dot) : number; // TODO: fix this
// };

// console.log(flooor(19.9999));
// console.log(ceil(16.5));
// console.log(ceil(19.9999));
// console.log(ceil(31.000000001));
// console.log(ceil(5));
// console.log(round(0.5));
// console.log(round(31.000000001));

// ---- 2 способ ---
// Math.round = function (number) {
//   return number - parseInt(number) >= 0.5 ? parseInt(number) + 1 : parseInt(number);
// };

// Math.ceil = function (number) {
//   return parseInt(number) === number ? number : parseInt(number) + 1;
// };

// Math.floor = function (number) {
//   return parseInt(number);
// };

// **** Task-46 -  String incrementer ****
// function incrementString(strng) {
//   // return incrementedString
//   let string = strng.replace(/[0-9]/g, '');

//   let len = strng.length - string.length;

//   let str = strng.slice(string.length) || '0';

//   str = (parseInt(str) + 1).toString();

//   while (str.length < len) {
//     str = '0' + str;
//   }

//   return string.concat(str);
// }
// console.log(incrementString('foobar100'));
// console.log(incrementString('foobar111'));
// console.log(incrementString('foobar'));
// console.log(incrementString('foobar99'));
// console.log(incrementString('foobar00'));
// console.log(incrementString('foobar0115'));
// console.log(incrementString('foobar00999'));

// **** Task-47 -  forEach polyfill ****

// let arr = [22, 21, 23, 44, 55, 66];
// ----- FOREACH -----
// Array.prototype.forEachPolyfill = function (callBack, thisArg) {
//   let context = this;

//   if (context == null) {
//     throw new Error('Not iterable!');
//   }

//   for (let i = 0; i < context.length; i++) {
//     callBack(context[i], i, context);
//   }
// };
// arr.forEachPolyfill((item, index, arr) => console.log(item, index, arr));

// ----- FILTER -----
// Array.prototype.filterPolyfill = function (callBack) {
//   let context = this;

//   if (context == null) {
//     throw new Error('Not iterable!');
//   }

//   let res = [];

//   for (let i = 0; i < context.length; i++) {
//     if (callBack(context[i], i, context)) {
//       res.push(context[i]);
//     }
//   }
//   return res;
// };
// let arr2 = arr.filterPolyfill((item, index, arr) => item > 20 && item < 40);
// console.log(arr2);

// ----- MAP -----
// Array.prototype.mapPolyfill = function (callback) {
//   let context = this;

//   let newArray = [];
//   for (let i = 0; i < context.length; i++) {
//     let current = context[i];
//     let newValue;

//     newValue = callback(current, i, context);
//     newArray.push(newValue);
//   }

//   return newArray;
// };
// let arr2 = arr.mapPolyfill((item, index, arr) => item + 10);
// console.log(arr2);

// **** Task-48 -  Заполнение матрицы спиралью ****
// const width = +prompt('Ширина матрицы?');
// const height = +prompt('Высота матрицы?');

// function getMatrix(width, height) {
//   let matrix = [];

//   for (let x = 0; x < height; x++) {
//     let row = [];

//     for (let y = 0; y < width; y++) {
//       row.push([x, y]);
//     }

//     matrix.push(row);
//   }

//   return matrix;
// }

// function getMatrix(width, height) {
//   let matrix = new Array(height).fill().map(() => new Array(width).fill(''));

//   let counter = 1;
//   let startCol = 0;
//   let endCol = width - 1;
//   let startRow = 0;
//   let endRow = height - 1;

//   while (startCol <= endCol && startRow <= endRow) {
//     for (let i = startCol; i <= endCol; i++) {
//       matrix[startRow][i] = counter;
//       counter++;
//     }

//     startRow++;

//     for (let j = startRow; j < endRow; j++) {
//       matrix[j][endCol] = counter;
//       counter++;
//     }

//     endCol--;

//     for (let c = endCol; c >= startCol; c--) {
//       matrix[endRow][c] = counter;
//       counter++;
//     }

//     endRow--;

//     for (let i = endRow; i >= startRow; i--) {
//       matrix[i][startCol] = counter;
//       counter++;
//     }

//     startCol++;
//   }

//   return matrix;
// }

// console.log(getMatrix(width, height));

// **** Task-49 -  Who likes it? ****
// function likes(names) {
//   if (names.length === 0) return 'no one likes this';
//   if (names.length === 1) return names[0] + ' likes this';
//   if (names.length === 2) return names[0] + ' and ' + names[1] + ' like this';
//   if (names.length === 3) return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//   if (names.length >= 4)
//     return names[0] + ', ' + names[1] + ' and ' + String(names.length - 2) + ' others like this';
// }

// **** Task-50 -  Rot13 ****
// function rot13(message) {
//   let alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
//   let alphabetRot = Array.from('NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm');
//   let res = [];

//   flag: for (let index = 0; index < message.length; index++) {
//     const element1 = message[index];
//     for (let j = 0; j < alphabet.length; j++) {
//       const element2 = alphabet[j];
//       if (element1 === element2) {
//         res.push(alphabetRot[j]);
//         continue flag;
//       } else if (/^[^a-zA-Z]+$/.test(element1)) {
//         res.push(element1);
//         continue flag;
//       }
//     }
//   }
//   return res.join('');
// }
// console.log(rot13('test'));

// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }

// **** Task-51 getPrize ****
function getPrize(quessScore, realScore) {
  if (quessScore === realScore) return 2;
  const quessArr = quessScore.split(':');
  const realArr = quessScore.split(':');

  for (let i = 0; i < quessArr.length; i++) {
    const maxGuess = Math.max(...quessArr);
    let maxIndex = quessArr.indexOf(maxGuess);
    console.log(maxGuess);
    for (let j = 0; j < realArr.length; j++) {
      const maxReal = Math.max(...realScore);
      i;
    }
  }
}
console.log(getPrize('1:2', '1:2')); // 2
console.log(getPrize('2:1', '5:0')); // 1
console.log(getPrize('3:0', '2:2')); // 0
