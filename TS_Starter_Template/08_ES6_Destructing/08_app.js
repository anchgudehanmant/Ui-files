/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var student = ['Rajan', 20, 'Engineering'];
/*
let sName =student[];
let sAge = student[1];
let sCourse =student[2];

 */
var sName = student[0], sAge = student[1], sCourse = student[2];
console.log("Name:" + sName + " Age:" + sAge + " Course:" + sCourse);
//Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
//Usage of Destructing to assign each variable of an object to other vars
//Best usage is to exchange the value btw a & b
