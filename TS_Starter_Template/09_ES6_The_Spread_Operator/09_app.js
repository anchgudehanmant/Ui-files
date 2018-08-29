/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
var array1 = [20, 30, 40];
var array2 = [10].concat(array1, [50, 60, 70]);
console.log("array2:" + array2);
//array can be expanded and pass it
var Values = Math.min(897, 21, 4555, 231, 2112, 232, 2465, 5);
var minValue = Math.min.apply(Math, value);
console.log("minValue:" + minValue);
//spread operator is used to create new copy an array
var cars1 = ['Audi', 'BMW', 'Discover', 'Baleno'];
//let cars2 =cars1.sllice(); //create a new copy
var cars2 = cars1.slice(); //create a new car
