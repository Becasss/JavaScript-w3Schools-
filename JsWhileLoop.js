// JavaScript While Loop
// Loos can execute a block of code as long as a specifid condition is true.


// The While Loop :: runs through a block of code as long as a specified condition is true.

/* syntax: while(condition){
    // code block to be executed
    }   */

    


// Example:
let text = "";
let i = 0;
while (i < 10) {
    text += "\n the number is " + i;
    i++;
}
console.log(text);




// Do While Loop :: execute a block of code once, before checking the condition is true, then it will execute the loop as long as the condition is true.

/* Syntax: do{
    //code block to be executed
    } 
    while(condition);   */



// Example:
do {
    text += "\n The number is " + i;
    i++;
}
while (i < 10);
console.log(text);




