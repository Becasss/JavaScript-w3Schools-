// Javscrip Break and Continue

// Javascript Break :: Jumps out of switch statement
let text = "";
for (let i = 0; i < 10; i++){
    if (i == 4) {
        break;
    }
    text += "The number is " + i + "\n";
}
console.log(text);




// Javscript Continue :: Jumps over  one iteration in the loop


for (let i = 0; i < 10; i++){
    if (i == 4) {
        continue;
    }
    text += "The number is " + i + "\n";
}
console.log(text);







// Javscript iterables
// Iterables are iterable ojbects (like arrays)

// For of Loop: loops through the elements of an iterable object.
/* syntax: 
for(variable of iterable){
    // code block to be executed
}   */



// Itrating over a String
const name = 'W3schools.com';
for (const x of name) {
    text += x + '\n';
}
console.log(text);




// Iterating Over an Array
const cars = ['Saab', 'Volvo', 'BMW'];
for (const x of cars) {
    text += x + '\n';
}
console.log(text);



// For example
const numbers = [2, 5, 6, 7, 8, 9, 10, 11];
for (const x of numbers) {
    text += x + '\n';
}
console.log(text);





// Iterating Over a Set
const letters = new set([1, 2, 3, 4, 5, 6, 7, 8]);

for (const x of letters) {
    text += x + '\n';
}
console.log(text);