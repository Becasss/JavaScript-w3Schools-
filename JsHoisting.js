// Javascript Declarations are Hoisted
// In JavaScript, a varaible can be declared after it has been used. In other words, a variable can b used before it has been declared.


// Example:
x = 5; // Assign 5 to x
console.log(x); // Output: 5
var x = 6; // Decalare x 
console.log(x);


// Example:2 
var x;  // Declare x
x = 5; // Assign 5 to x
console.log(x); // Output: 5










// Jaavascripts Initializations are NOt Hoisted :: Javascript only hoits declarations, not initializations.

// Example1:
var x = 5; // Initialize x
var y = 5; // Initialize y

console.log(`x= ${x}  y =  ${y}`);



// Example2:
var x = 5; // Initialize x
console.log(`x = ${x} z = ${z}` ); 
var z = 5; // Initialize y

