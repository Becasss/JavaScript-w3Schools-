// Conditional Statements:
// are used to perform different actions based on different conditions.



// if Statement:
// Use if to specify a block of code to be executed, if a specified condition is true
let age = prompt("Enter your age: ");
if (age >= 20) {
    console.log("You can eligible to Marry!");
};





// Next example:
let workingHours = prompt("Entr your working hours:");

if (workingHours < 18) {
    console.log("Good Day!");
}






// The else Statement
// Use the else statement to specify a block of code to be executed if the condition if false.


//Example
let hour = prompt("Enter your hours:");
if (hour < 18) {
    console.log("Excelent Day");
} else {
    console.log("Bad day");
}





// The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.

// Example
let time = prompt("Enter the right time:");
if (time < 10) {
    console.log("Good Morning");
} else if (time < 20) {
    console.log("Good Day");
} else {
    console.log("Good Evening");
}