// Lambdas (Arrow Functions)
 //A lambda expression is an anonymous function that you can use to create
//

//Normal function 1
let greetNormal = function(){
    return "Good morning";
};
console.log(greetNormal());

let greetArrow =() =>"Good Morning";
console.log(greetArrow());

//Normal function 2
let greetMeNormal =function (name) {
    return `Good Morning ${name}`;
};
console.log(greetMeNormal('John'));

let greetMeArrow =(name) =>`Good Morning ${name}`;
console.log(greetMeArrow('Williams'));

//Normal Function 3
let sumNormal =function (a,b) {
    return a + b;
}



}
