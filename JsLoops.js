// Loops can execute a block of code number of times .
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "\n";
}



console.log(text);



// Different types of Loops
// For Loops  :  Loops through a block of code a number of times
let num;
for (let i = 0; i < 10; i++) {
    num +="The number is " +  i + "\n";
}
console.log(num);



// Example : 
const person = ['Bikash', 'John', 'Rock', 'Smith', ' Doe', 'Arjun', 'Mike'];
let len = person.length;
let txt = " ";
for (let i = 0; i <len; i++) {
    txt += person[i] + '\n';
}
console.log(txt);



//Example: Multiple of 9
let mul;
for (let i = 0; i <= 10; i++) {
    mul += i * 9 + "\n";
}
console.log(mul);



// Example: Sum of all numbers betweeen 0 to 10;
let sum= 0;
for (let i = 0; i <= 10; i++) {
    sum += i;
}
console.log(`The total sum of 0 to 10  is ${sum}`);




// The For In Loop : statements loops through the properties of an object.

/*Syntax:  for(key in object) {
    // some block to be executed
}   */



// Example : 
const prson = {
    firstName: "Bikash",
    lastName: "Singh",
    age: 25,
    eyeColor: "blue"
};
let ttxt = "";
for (let x in prson) {
    ttxt += prson[x] + "\n";
}
console.log(ttxt);





// For In Over Arrays
const number = [1, 2, 3, 4, 5];
let tdt = "";
for (let x in number) {
    tdt += number[x] + "\n";
}
console.log(tdt);






// Array.forEach :: calls a function (a callback function) once for each element.
const numb = [35, 56, 23, 34, 32, 37];
let nem = "";
numb.forEach(myFunction);


function myFunction(value, index, array) {
    nem += value + "\n";
}
console.log(nem);



// For of Loop :: statement loops through the values of an interable object.
// Lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists and more:


// Looping over an Array 
for (let x of cars) {
    text = text + "\n";
}
console.log(text);





// Looping over an string
let language = "BIkash Yamphu Rai";
for (let x of language) {
    text += x + "\n";
}
console.log(text);