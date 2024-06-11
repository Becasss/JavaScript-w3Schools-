// JavaScript Scope
// Scope determines the accessibility (visibility) of varibles.
// Block scope  /   Function scope  / Global scope


// JavaScript Block Scope :: only const and let create block scope 
/* { 
let x =2;
}
// x can Not be used here
*/



// variables declared with the  var keyword can NOt have block scope.
/* {
var x =2;
}
// x can be used here
*/



// Local Scope :: syntax:
// Code here can NOT use carName
myFunction();
function myFunction() {
    let carName = "Volvo";
    console.log(typeof carName + ' ' + carName);
    // Code here can use carName
}
console.log(typeof carName);
    // Code here can Not use carName
    


// Function Scope :: variables declared with var, let and const are quite similar when delcard inside a function.



// Global Javascript Variables :: A varibale delcared outside a function, becoms GLOBAL.

// Example:
let crName = "Volvo";
// code here can be use CrName

myfunction();
function myfunction() {
    console.log("I can display " + crName);
}





// Global Scope :: Global variables can be accessed from anywhere in a Javascript program.


