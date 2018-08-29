// Create a simple function to add two number
function sum(a, b) {
    var addition = a + b;
    return addition;
}
console.log("Sum of a, b, is :" + sum(10, 20));
// Create the same add function with first number as 'any' type
function sumAny(a, b) {
    var sum = 0;
    if (typeof a === 'number') {
        sum = a + b;
    }
    else if (typeof a === 'string') {
        if (isNaN(parseFloat(a))) {
            sum = b;
        }
        else {
            sum = parseFloat(a) + b;
        }
    }
    else {
        sum = b;
    }
    return sum;
}
console.log("Sum of 10,20:" + sumAny(10, 20));
// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
// Function Overloading in TypeScript , findMin using Math
// Create an Employee function and get an Employee Object
