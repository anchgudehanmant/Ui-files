// Lambdas (Arrow Functions)
//A lambda expression is an anonymous function that you can use to create
//
//Normal function 1
var greetNormal = function () {
    return "Good morning";
};
console.log(greetNormal());
var greetArrow = function () { return "Good Morning"; };
console.log(greetArrow());
//Normal function 2
var greetMeNormal = function (name) {
    return "Good Morning " + name;
};
console.log(greetMeNormal('John'));
var greetMeArrow = function (name) { return "Good Morning " + name; };
console.log(greetMeArrow('Williams'));
//Normal Function 3
var sumNormal = function (a, b) {
    return a + b;
};
