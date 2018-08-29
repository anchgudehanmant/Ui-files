// Create a function and provide few default parameters using ES6
function greet(name, age) {
    if (age === void 0) { age = 30; }
    var greetMsg = "Good Morning" + name + "You are" + age + "yers Old!";
    return greetMsg;
}
var greeting = greet('John');
console.log(greeting);
document.querySelector('#display').textContent = greeting;
