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