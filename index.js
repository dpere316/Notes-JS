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

let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x * y);
// console.log(x % y);
// console.log(x ** y); // Exponent

// Increment 
    // console.log(x++); // increments after x = 10
    // or x = x + 1 
    // console.log(x) // x = 11
    // console.log(++x) // increments then it prints

// Decrement
    // console.log(--x)
    // console.log(x--) 
    // or x = x - 1 
    // console.log(x)

// Relational
    // console.log(x > 0)
    // console.log(x < 0)
    // console.log(x >= 10)
    // console.log(x <= 10)

// Equality
// Strict equality (type + value) are equal
    // console.log(x === 10) 
    // console.log(x !== 10)
// Lose equality does not care about the type it will convert the type on the right side to match the type on the left side (value)
    console.log(x == '10')

// Ternary Operator

// If a customer has more than 100 points ,
// they are a 'gold' customer, otherwise,
// they are a 'silver' cutomer.

let points = 90
let type = points > 100 ? 'gold' : 'silver'
console.log(type)


// Logical AND (&&)
// Returns TRUE if both operands are TRUE
let highIncome = false;
let goodCreditScore = false;
let eligble = highIncome || goodCreditScore;
console.log('Eligible ' + eligble)

// NOT (!)
let refused = !eligble;
console.log('Application Refused ' +  refused)