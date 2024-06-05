// JavasScript Comparison and Logical Operators
// Comparison and Logical Operators are used to test for true and false.


// Comparison Operators
// Comparison operators are used in logical statementts to determine equality or difference between variables or values.


// Equal to : ==
let x = 5;
console.log(x == 8);    // Output: fasle


console.log(x == 5);    // Output : true

console.log(x == "5");  // Output: true


// Equal valu and equal type : ===

console.log(x === 5);       // Output: true

console.log(x === "5");     // Output: false


// Not Equal : !=

console.log(x != 8);          // Output: true



// Not equal value or not equal type : !==

console.log(x !== 5);       // Output : false

console.log(x !== "5");     // Output: true

console.log(x !== 8);       // Output: false


// greater than : >

console.log(x > 8);         // Output: false

// less than : <

console.log(x < 8);         // Output : true


// greater than or equal to : >=

console.log(x >= 8);        // Output: false


// less than or equal to : <=

console.log(x <= 8);        //Output : true


// Note: Comparison operators can be used in conditional statement to compare values and take action depending on the result:






// Condition (Ternary) Operator
// Javascript also contains a conditional operator that assigns a value to a variable based on some condition.
// syntax: varaibleName = (condition)? value1: value2


// For Example:
function myFunction() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young" : "Old enough";
    document.getElementById("demo").innerHTML =
        voteable + "To vote.";
}

// JavaScript Comparisons
function myfunction() {
    let voteable;
    let agee = Number(document.getElementById("agee").value);
    if (isNaN(agee)) {
        voteable = "INput is not a number";

    } else {
        voteable = (agee < 18) ? "too Young" : "Old Enough";

    }
    document.getElementById("dmo").innerHTML
        = voteable + "to vote";
}





// THe Nullish Coalescing operator (??)
// Thee ?? Operator returns the firstt argument if is not nullish (null or undefined.)

let name = null;
let text = "missing";
let result = name ?? text;
console.log(result);        // Output : missing
