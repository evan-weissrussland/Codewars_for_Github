"use strict"; /* включение сторого режима*/
/*
function digitize(n) {
   let str = String(n);
   let num = [];
   for (let i = 0; i < str.length; i++) {
      num.unshift(Number(str[i]));
   }
   return num;
}




console.log(digitize(123456789));
*/
/*
let number = function(busStops) {
   let numb = 0;
   for (let i = 0; i < busStops.length; i++) {
      numb += busStops[i][0] - busStops[i][1];
   } 
   return numb;
}
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
*/
/*
function filter_list(x) {
   let array = [];
   for (let i = 0; i < x.length; i++) {
      //console.log(x[i]);
      if (typeof x[i] === "number") {
         array.push(x[i]);
         //console.log(newArrey);
      }
   } 
   return array;
}
console.log(filter_list([1, 'a', 'b', 0, 15]));
*/
/*
function betterThanAverage(classPoints, yourPoints) {
   let sum = 0;
   let GPA;
   for (let i = 0; i < classPoints.length; i++) {
      sum += classPoints[i];
   }
   GPA = sum / classPoints.length;
   if (GPA < yourPoints) {
      return true;
   } else {
      return false;
   }

}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
*/
/*
function sumMix(x) {
   let newArrey = [];
	
   for (let i = 0; i < x.length; i++) {
      //console.log(x[i]);
      newArrey.push(x[i] * 2);
      //console.log(newArrey);
   }
   return newArrey;
}
console.log(sumMix([9, 3]));
*/
/*
function printerError(s) {
   let errorRate;
   let sumErr = 0;	
   for (let i = 0; i < s.length; i++) {
      if (s[i] === "n" || s[i] === "o" || s[i] === "p" || s[i] === "q" || s[i] === "r" || s[i] === "s" || s[i] === "t" || s[i] === "u" || s[i] === "v" || s[i] === "w" || s[i] === "x" || s[i] === "y" || s[i] === "z") {
         console.log(1);
         sumErr++;
      }
   }
   errorRate = `${sumErr}/${s.length}`;
   return errorRate;
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
*/
/*
function getCount(str) {
   let sum = 0;
   let array = ["a", "e", "i", "o", "u"];
   for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < array.length; j++) {
         if (str[i] === array[j]) {
            sum++;
         }
      }
   }
   return sum;
}

console.log(getCount("abracadabra"));
*/

/*
function lovefunc(flower1, flower2) {
   let a = flower1 % 2;
   let b = flower2 % 2;
   if (a === 0 && b != 0 || a != 0 && b === 0) {
      return true;
   } else {
      return false
   }
}

console.log(lovefunc(0, 1));
*/
/*
function validatePIN(pin) {

   if (pin.length === 4 || pin.length === 6) {
      for (let i = 0; i < pin.length; i++) {

         if (!Boolean(Number(pin[i]))) {
            if (pin[i] === '0') {

               continue;
            }
            return false;
         }
      }
      return true;
   } else {
      return false;
   }
}
console.log(validatePIN("908765"));
*/
/*
function openOrSenior(data) {

   let output = data.map(item => {
      if (item[0] >= 55 && item[1] > 7) {
         return "Senior";
      } else {
         return "Open";
      }
   });
   return output;
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));
*/


/*
function DNAStrand(dna) {
   let splitArr = dna.split('');
   console.log('Разбиваем строку на символы: ' + splitArr);
   let arrChange = splitArr.map(item => {
      if (item === "A") {
         return item = "T";
      }
      if (item === "T") {
         return item = "A";
      }
      if (item === "G") {
         return item = "C";
      }
      if (item === "C") {
         return item = "G";
      }
   });
   console.log(arrChange);
   let output = arrChange.join("");
   console.log(output, typeof output)

   return output;
}
console.log(DNAStrand("AAAA"));
*/


/*
const summation = function (num) {
   let sum = 0;
   for (let i = 1; i <= num; i++) {
     sum += i;
   }
   return sum;
 }
 */
/*
function strChange(str) {
   console.log(str);
   let arrWord = str.split(" "); //это массив из слов выражения
   let resultMap = arrWord.map(function(item) { // результ - это массив результатов map для каждого item из arrWord
      let newSplit = item.split(""); // разбиваем arrWord[i] по буквам
      let newSplit1 = newSplit.reverse(); // меняем порядок букв в arrWord[i] 
      let newWord = newSplit1.join(""); // склеиваем буквы заново в слова
      return newWord;      
   });
   let newString = resultMap.join(" ");
return newString; //возвращает результат в функцию strChange;
}
console.log(strChange("This is an example!"));
 */

//-----------Start task--------------------------
//---------решение № 1  через filter()----------------
/*
function countSheeps(arrayOfSheep) {
   let result = arrayOfSheep.filter(function (item) {
      if (item === true && (item !== null || item !== undefined)) {
         return item;
      };
   })
   return result.length;
}
*/
//---------решение № 2   через reduce()----------------
/*
function countSheeps(arrayOfSheep) {
   let value = arrayOfSheep.reduce((accumulator, item) => {
      if (item === true && (item !== null || item !== undefined)) {
         return accumulator + 1;
      } else {
         return accumulator;
      }
   }, 0);
   return value;
}

console.log(countSheeps([true,  true,  true,  false,
   true,  true,  true,  true ,
   true,  false, true,  false,
   true,  false, false, true ,
   true,  true,  true,  true ,
   false, false, true,  true]));
   */
//--------------------END task------------------


//-----------Start task--------------------------
/*const boolToWord = bool => bool ? "Yes" : "No"
console.log(boolToWord(false))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*const paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m;
console.log(paperwork(12, 3))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*function solution(str, ending){
    return str.endsWith(ending)
}*/
//--------------------END task------------------

//-----------Start task--------------------------
/*const func = (a) => {
    let b = a.split(' ')
    console.log('b=', b)

    let arrayFromMap = b.map((item, index) => {

        let arrayLettersFromItem = item.split('')

        console.log(`arrayLettersFromItem${index + 1}=  `, arrayLettersFromItem)

        let filter = arrayLettersFromItem.filter(it => {
            if (it !== 'a' && it !== 'A' && it !== 'e' && it !== 'E' && it !== 'i' && it !== 'I' && it !== 'o' && it !== 'O' && it !== 'u' && it !== 'U') {
                return true
            } else {
                return false
            }
        })
        console.log(`filter${index + 1}=  `, filter)

        let joinFilter = filter.join('')
        return joinFilter
    })
    console.log('arrayFromMap=   ', arrayFromMap)
    let rezult = arrayFromMap.join(' ')
    console.log(a, ' ', rezult)
    return rezult
}
console.log(func('asfOf werijs Weroy'))*/
//--------------------END task------------------


//-----------Start task--------------------------

//-------вариант 1--------------

/*function squareDigits(num) {
    let a = String(num);
    console.log('a=', a)
    let b = a.split('')
    console.log(b)
    let c = b.map(it => {
        return it ** 2
    });
    console.log(c)
    let r = c.join('')
    console.log(r)
    let rez = +r

    console.log(rez)
    return rez
}

console.log(squareDigits(23))*/

//-------вариант 2--------------

/*function squareDigits(num){
    return +String(num).split('').map(it=>it**2).join('');
}*/

//--------------------END task------------------

//-----------Start task--------------------------
/*function multiply(a, b){
    return a * b
}*/
//--------------------END task------------------

//-----------Start task--------------------------
//-------вариант 1--------------
/*const sumArray = (arr) => {
    if (arr.length !== 0) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    } else return 0
}*/
//-------вариант 2--------------
/*const sumElements = (arr) => arr.length !== 0 ? arr.reduce((acc,el) => acc += el, 0) : 0*/

//--------------------END task------------------

//-----------Start task--------------------------
/*const highAndLow = (str) => {
   const arr = str.split(' ')
   const max = Math.max(...arr)
   const min = Math.min(...arr)
    return `${max} ${min}`
}

console.log(highAndLow("1 9 3 4 -5"))*/
//--------------------END task------------------

//-----------Start task--------------------------

/*const descendingOrder = (n) => {
   const arr = Number(String(n).split('').sort((a,b)=>b-a).join(''))
  console.log(arr, typeof arr)
}

console.log(descendingOrder(123456))*/

//--------------------END task------------------

//-----------Start task--------------------------
/*
function getMiddle(s)
{
    if(s.length % 2 === 0) {
        return  s.slice((s.length/2)-1, (s.length/2)+1)
    } else {
        return s[Math.floor(s.length/2)]
    }
}*/
//--------------------END task------------------


//-----------Start task--------------------------
/*
const duplicateEncode = (word) => {
    const arr = word.toLowerCase().split('')
    if (arr.length !== 1) {
    const newArr = []
    for (let i=0; i<arr.length;i++) {
        for (let j=i+1; j<arr.length;j++) {
            if(arr[i]===arr[j]) {
                newArr[i]=')'
                newArr[j]=')'
            } else {
                if(newArr[i] !==')') {newArr[i]='('}
                if(newArr[j] !==')') {newArr[j]='('}
            }
        }
    }
    return newArr.join('')
    } else {
        return '('
    }
}

console.log(duplicateEncode('(( @'))*/
//--------------------END task------------------


//-----------Start task--------------------------
/*const foo = (str) => {
    const arr = str.toLowerCase().split('')
    const newArr = arr.map((el,i) => {
        return `${el.toUpperCase()}${el.repeat(i)}`
    })
    return newArr.join('-')
}
console.log(foo("abcd"))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*const persistence = (num) => {
    let arr = String(num).split('')
    console.log(arr)
    let count = 1
    while (arr.length !== 1) {
        console.log(`итерация ${count}`)
        let multiplyNum = arr.reduce((m, el) => m *= el,)
        console.log(multiplyNum)
        arr = String(multiplyNum).split('')
        console.log(arr)
        count++
    }
    return count - 1
}
console.log(persistence(999))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*function isTriangle(a,b,c){
    const arr = [a,b,c].sort((a,b) => b-a)
    return arr[1] + arr[2] > arr[0]
}*/
//--------------------END task------------------


//-----------Start task--------------------------
/*function isPangram(string){
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z']
    const newStr = string.toLowerCase()
    for (let i=0; i<string.length; i++) {
        newStr.includes(abc[i]) && delete abc[i]
    }
    for (let el of abc) {
         if (el !== undefined) {
             return false
         }
    }
    return true
}
console.log(isPangram("abcdefghijklmnopqrstuvwxyzz!!   ."))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*const fo = (n) => {
    if (n !== 0) {
        return Math.sqrt(n) % Math.floor(Math.sqrt(n)) === 0
    }
    return true
}
console.log(fo(0))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*function booleanToString(b){
    return String(b)
}*/
//--------------------END task------------------

//-----------Start task--------------------------
/*function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq)+1)**2 :  -1
}*/
//--------------------END task------------------

//-----------Start task--------------------------
/*const findOdd = (arr) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr.filter(el => el === arr[i]))
    }
    return newArr.find(el => el.length % 2 !== 0)[0]
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
console.log(findOdd([0, 1, 0, 1, 0]))
console.log(findOdd([1, 1, 2]))
console.log(findOdd([0]))
console.log(findOdd([7]))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*
const isIsogram = (str) => {
    str=str.toLowerCase()
    for (let i=0; i<str.length; i++) {
        if (str.includes(str[i],i+1)) {
            return false
        }
      }
    return true
}

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('aba'))
console.log(isIsogram('moose'))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*var number=function(array){
    return array.length !== 0 ? array.map((el,i)=>`${i+1}: `+el) : []
}
console.log(number(['a','b','c']))
*/
//--------------------END task------------------

//-----------Start task--------------------------
/*
function XO(str) {
    return str.toLowerCase().split('').filter(el=>el==='o').length === str.toLowerCase().split('').filter(el=>el==='x').length
}

console.log(XO('ooxx'))
console.log(XO('xooxx'))
console.log(XO('ooxXm'))
console.log(XO('zpzpzpp'))
console.log(XO('zzoo'))
*/
//--------------------END task------------------

//ни к чему не относится
// console.log('ooxx'.toLowerCase().split('x'))
// console.log('ooxx'.toLowerCase().split('o'))
// console.log('ooxx'.toLowerCase().split('x').length)
// console.log('ooxx'.toLowerCase().split('o').length)

//--------------

//-----------Start task--------------------------
/*function XO(str) {
    return str.toLowerCase().split(' ').map((el)=>el.split('').map((t,i)=>i === 0 ? t[i].toUpperCase() : t).join('')).join(' ')
}

console.log(XO("How can mirrors be real if our eyes aren't real"))*/
//--------------------END task------------------
//-----------Start task--------------------------
/*function findShort(s) {
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*const solution = (str) => {
    if (str) {
        const arrStr = str.split('')
        console.log(arrStr)
        const newAr = []
        const mapAr = arrStr.map(e => {
            if (e !== e.toLowerCase()) {
                newAr.push(' ')
                newAr.push(e)
            } else {
                newAr.push(e)
            }
            return e
        })
        return newAr.join('')
    } else {
        return "''"
    }
}

console.log(solution("camelCasing"))
console.log(solution("camelcasing"))
console.log(solution(""))*/
//--------------------END task------------------

//-----------Start task--------------------------
/*const likes = (names) => {
   if (!names.length) {
       return 'no one likes this'
   } else if (names.length === 1) {
       return `${names[0]} likes this`
   } else if (names.length === 2) {
       return `${names[0]} and ${names[1]} like this`
   } else if (names.length === 3) {
       return `${names[0]}, ${names[1]} and ${names[2]} like this`
   } else if (names.length > 3) {
       return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
   }
}

console.log(likes(['QQ', 'WW', 'EE', 'RR', 'TT']))
*/
//--------------------END task------------------

//-----------Start task--------------------------
/*const twoSum = (numbers,target) => {
    const newAr = []
    outer: for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                newAr.push(i)
                newAr.push(j)
                break outer
            }
        }
    }
    return newAr
}
console.log(twoSum([-552, 40, -138, -997, 490, 181, 478, -5, 701, 524, 495, 222, 891, 832, -604, 268, -981, 72, -245, 167, 129, 973, 925, -86, -934, 741, -931, -509, 165, 292, -854, 708, -847, 425, 409, 427, 323, -576, 937, -168, -438, 369, 472, -751, 360, -219, 950, 411, 924, 67, -142, 435, 945, 205, 980, -943, -75, -866, -919, 185, -125, 994, 185, -437, -963, 227, -491, -454, -331, 552, 417, 701, 554, 289, -183],912))*/
//--------------------END task------------------

//-----------Start task--------------------------
//--вариант 1
/*const solution = (number) => {
    if (number > 0 ) {
        const arr = []
        const newArr = []
        for (let i = 1; i < number; i++) {
            arr.push(i)
        }
        for (let i = 0; i < number; i++) {
            if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
                newArr.push(arr[i])
            }
        }
        return newArr.reduce((sum, e) => sum + e, 0)
    } else {
        return 0
    }
}
console.log(solution(10))

//--вариант 2 через reduce
const solution1 = (number) => {
    if (number > 0) {
        const arr = []

        for (let i = 1; i < number; i++) {
            arr.push(i)
        }

        return arr.reduce((sum, e) => {
            if (e % 3 === 0 || e % 5 === 0) {
                return sum + e
            } else {
                return sum
            }
        }, 0)
    } else {
        return 0
    }

}
console.log(solution1(10))*/
//--------------------END task------------------

/*//-----------Start task--------------------------
const uniqueInOrder = (data) => {
    if (typeof data === 'string') {
        data = data.split('')
    }
    console.log(data)
    const newArr = []
    outer: for (let i = 0; i < data.length; i++) {
        i === data.length - 1 && newArr.push(data[i])
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] === data[j]) {
                continue outer
            }
            newArr.push(data[i])
            continue outer
        }
    }
    return newArr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))
//--------------------END task------------------*/

/*
//-----------Start task--------------------------
const comp = (a, b) => {
    if (Array.isArray(a) && Array.isArray(b)) {
        a = a.map(n => n * n)
        a = a.sort((a,b)=>a-b)
        b = b.sort((a,b)=>a-b)
        for (let i = 0; i < a.length; i++) {
            if (b[i] !== a[i]) {
                return false
            }
        }
        return true
    }
    return false
}

console.log(comp([9, 6, 10, 9, 0, 6, 5, 1, 0, 5, 1, 10, 1, 4, 3],[0, 25, 25, 9, 0, 36, 1, 81, 2, 1, 81, 16, 36, 100, 100] ))
//--------------------END task------------------
*/
/*

//-----------Start task--------------------------
const SeriesSum = (n) => {
    if (n === 0) {
        return '0.00'
    }
    let a = 4
    let b = 1
    for (let i = 1; i < n; i++) {
        b += 1 / a
        a += 3
    }
    return b.toFixed(2)
}

console.log(foo(5))
console.log(foo(2))
console.log(foo(1))
console.log(foo(0))
//--------------------END task------------------
*/
/*
//-----------Start task--------------------------
const sumDigPow = (a, b) => {
    const arr = []
    for (let i = a; i <= b; i++) {
        let splitArr = String(i).split('').reduce((acc, t, c) => acc + Math.pow(+t, c + 1), 0)
        if (splitArr === i) {
            arr.push(i)
        }
    }
    return arr.sort((a, b) => a - b)
}
console.log(sumDigPow(50, 150))
//--------------------END task------------------
*/

/*
//-----------Start task--------------------------
const powersOfTwo = (n) => {
    return Array(n+1).fill(2).map((el,i) => el**i)
}
console.log(powersOfTwo(0))
//--------------------END task------------------
*/

/*
//-----------Start task--------------------------
function enough(cap, on, wait) {
    return cap - on - wait >= 0 ? 0 :  wait - cap + on
}
console.log(enough(100,60,50))
//--------------------END task------------------
*/


/*
//-----------Start task--------------------------
const foo = (str) => {
return str.length > 4 ? str.split('').map((e, i, arr) => i < arr.length-4 ? '#' : e ).join('') : str
}
console.log(foo("4556364607935616"))
console.log(foo("Nananananananananananananananana Batman!"))
console.log(foo("1"))
console.log(foo(""))
//--------------------END task------------------
*/


/*//-----------Start task--------------------------
const foo = (arr) => {
const sortArr = arr.sort((a,b)=> a-b)
    return sortArr[0]+sortArr[1]}
console.log(foo([19, 5, 42, 2, 77]))
//--------------------END task------------------*/

/*
//-----------Start task--------------------------
const solution = (nums) => {
    return nums ? nums.sort((a,b)=>a-b) : []
}
console.log(solution([1, 2, 10, 50, 5]))
console.log(solution([]))
//--------------------END task------------------*/

//-----------Start task--------------------------
/*
const quicksum = (packet) => {
    const alfaBet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return /^[A-Z][A-Z\s]{0,}[A-Z]$/.test(packet) ? packet.split('').reduce((acc, p, i) => {
            if (p === ' ') {
                return acc
            } else {
                return acc + (i + 1) * (alfaBet.findIndex(e => e === p) + 1)
            }
        }
        , 0) : 0

}
console.log('результат вызова функции: ' + quicksum('234 234 WEF ASDF AAA 554211 ???? '))
//--------------------END task------------------*/
/*

//-----------Start task--------------------------
const quicksum = (str) => {
    const index = str.indexOf('#')
    if (index !== -1) return str.slice(0,index)
return str

}
console.log('результат вызова функции: ' + quicksum("www.codewars.com#about"))
console.log('результат вызова функции: ' + quicksum("www.codewars.com?page=1"))

//--------------------END task------------------
*/
/*

//-----------Start task--------------------------
const quicksum = (arr) => {
    if (arr.length === 0 && (arr.length === 0 && arr[0] === 0)) return 'even'
    return arr.reduce((acc,a) => acc += a) % 2 === 0 ? 'even' : 'odd'
}
console.log('результат вызова функции: ' + quicksum([0, 1, 4]))
console.log('результат вызова функции: ' + quicksum( [0, -1, -5]))
console.log('результат вызова функции: ' + quicksum( [0]))

//--------------------END task------------------
*/
/*

//-----------Start task--------------------------
const quicksum = (num) => {
    let arr = []
   for (let i = 2; i < num; i++) {
       if (num % i === 0) arr.push(i)
   }
   return arr.length === 0 ? `${num} is prime` : arr
}
console.log('результат вызова функции: ',  quicksum(12))
console.log('результат вызова функции: ', quicksum( 25))
console.log('результат вызова функции: ',  quicksum( 13))

//--------------------END task------------------
*/
/*

//-----------Start task--------------------------
const quicksum = (arr) => {
const arrCopy = [...arr]
const arrCopy2 = [...arr]
    const sortedArr = arrCopy.sort((a,b)=>a-b)
    const index = arrCopy2.indexOf(sortedArr[0])
    arrCopy2.splice(index,1)
    return arrCopy2

}
console.log('результат вызова функции: ',  quicksum([1,2,3,4,5]))
console.log('результат вызова функции: ', quicksum( [5,3,2,1,4]))
console.log('результат вызова функции: ',  quicksum( [2,2,1,2,1]))

//--------------------END task------------------
*/
/*

//-----------Start task--------------------------
const quicksum = (arr) => {
    return [Math.min(...arr), Math.max(...arr)]
}
console.log('результат вызова функции: ',  quicksum([1,2,3,4,5]))
console.log('результат вызова функции: ', quicksum( [2334454,5]))
console.log('результат вызова функции: ',  quicksum( [1]))

//--------------------END task------------------
*/
/*

//-----------Start task--------------------------
const solution = (num) => {
    const arr = []
    for(let i = 0; i < num; i++) {
        if (i%3===0 || i%5===0) {
            arr.push(i)
        }
    }
    // console.log(arr)
    return arr.reduce((acc,i)=>(acc = acc+i), 0)
}
console.log('результат вызова функции: ',  quicksum(10))
console.log('результат вызова функции: ', quicksum( 100))
console.log('результат вызова функции: ',  quicksum( 1000))

//--------------------END task------------------

*/
/*

//-----------Start task--------------------------
const solution = (str) => {
    const arr = str.split(' ')
    if (arr.length === 1 && arr[0] < 5) return str
    return arr.map(a =>
        a.length >= 5 ? a.split('').reverse().join('') : a
    ).join(' ')
}
console.log('результат вызова функции: ', solution('Hey fellow warriors'))
console.log('результат вызова функции: ', solution('Welcome'))
console.log('результат вызова функции: ',  solution( 'This is another test'))

//--------------------END task------------------
*/
/*

//-----------Start task--------------------------
const digitalRoot = (number) => {
 let saveNum = 0
    function dd(n) {
     if (n < 10) return 0
     const arr = n.toString().split('')
        let newNum = arr.reduce((acc,i)=>(acc = acc + +i),0)
        saveNum = newNum
        dd(newNum)
    }
    dd(number)
    return saveNum
}
console.log('результат вызова функции: ', digitalRoot(493193))
//--------------------END task------------------
*/
/*

//-----------Start task--------------------------
const digitalRoot = (ar1,ar2) => {
    return ar1.filter(i=> !ar2.includes(i))
}
console.log('результат вызова функции: ', digitalRoot([1,2,2,2,3],[2]))
//--------------------END task------------------
*/
