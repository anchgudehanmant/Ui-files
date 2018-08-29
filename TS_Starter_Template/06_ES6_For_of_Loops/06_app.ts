/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

// Usage of for...in loop from ES5
let output:'';
let language: Array<string> = ['HTML','java','typescript','javascript'];
for(let index in language){
    let value = language[index];
    output += `${value},`;
}
console.log(output);
// Usage of for...of loop from ES6
output='';
for (let value of language){
    output +=  `${value},`;
}
console.log(output);

//for each
output='';
language.forEach(function (element) {
    output += `${element},`;

});
console.log(output);