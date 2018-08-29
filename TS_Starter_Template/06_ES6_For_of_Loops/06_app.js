/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
// Usage of for...in loop from ES5
var output;
var language = ['HTML', 'java', 'typescript', 'javascript'];
for (var index in language) {
    var value = language[index];
    output += value + ",";
}
console.log(output);
// Usage of for...of loop from ES6
output = '';
for (var _i = 0, language_1 = language; _i < language_1.length; _i++) {
    var value = language_1[_i];
    output += value + ",";
}
console.log(output);
//for each
output = '';
language.forEach(function (element) {
    output += element + ",";
});
console.log(output);
