let name = 'Daniel'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectColor = null; // when use null when we want to clear the value of the variable 

let person = { // Object Literal
    name:'Daniel', // This is a property also known as key valued pairs
    age: 23
}

// Dot notation 
person.name = 'David';

// Bracket Notation 
let selection = 'name';
person[selection] = 'Jose';


let selectedColor = ['red','blue']; // An array is an object in JavaScript
selectedColor[2] = 2;
console.log(selectedColor.length);

function greet(name, lastName){ // name is a parameter 
    console.log('Hello ' + name + ' ' + lastName)
}

greet('Daniel', 'Perez') // Daniel is an argument it is the actual value that is provided for that parameter
greet('John', 'Smith')

function square(number){
    return number * number
}

console.log(square(2))