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