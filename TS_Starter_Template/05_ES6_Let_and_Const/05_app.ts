/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/

// Usage of let vs Var inside for loop created variables
for(var i=0; i<=10; i++){}

console.log(i); //11 we can access "i" becoz its 'var'

for(let j=0; j<=10; j++){}
//console.log(j); //cannot access 'j' becoz its 'let'

//uses of let vs var inside if block
var model ='BMw';
if(model ==='BMW')
{
    var color1 ='RED';
}
console.log(color1);//RED,we can access 'color1' becoz its 'var'
if(model==='BMW'){
    let color2='black';
}
//console.log(color2);// we cannot access 'color2' becoz its 'let;


//Usage Const Variable creation
const APP_NAME ='TS App';

//APP_NAME ='JS App'; //we cannot re-assign becoz its final(const)


