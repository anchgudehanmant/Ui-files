
// Create a function and provide few default parameters using ES6

function greet(name:string,age:number=30):string {
    let greetMsg = "Good Morning" + name + "You are" + age + "yers Old!";
    return greetMsg;

}
let greeting =greet('John');

console.log(greeting);
document.querySelector('#display').textContent=greeting;
