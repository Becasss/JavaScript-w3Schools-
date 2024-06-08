// Destruct Assignment Syntax

// The destructuring assignment syntax unpack obects properties into variables.
// let {fisrtName, LastName} = person;

// It can also unpack arrays and any other iterables.
// Let [firstName, lastName] = person;




// Object Desctructuring :

// create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
// Destructuring 
let { firstName, lastName } = person;

// Display Primitive Values
console.log(firstName + " " + lastName);




// Object Default Values
const people = {
    fistName: "John",
    latName: "Doe",
    age: 50,
    eyeColor: "blue"
};


// Destructuring
let { fistName, latName, country = "Nepal" } = people;

// Display Primitive Values
console.log(fistName + " " + latName + " " + country);



/*
// create an object
const boy = {
    lname = "John",
    ssurname = "Yamphu"
    age = 50,
    eyeColor = "blue"
};

// Destructuring
let { ssurname: caste } = boy;
console.log(caste);
*/





// Strings Destructing  :: One use for destructuring is unpacking string characters.

let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;

// Display Value
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);




// Array Destructuring :: We can pick up array variables into our own varaibles
// Create an Array
const fruits = ["Banana", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;


// Display Primitive Values
console.log(fruit1);
console.log(fruit2);




// Array Position Values  :: We can pick up values fro specific index location of an array:

// Create an Array
const fruit = ["Banana", "Oranges", "Apples", "Mangos"];
const { [0]: frut1, [1]: frut2 } = fruit;

//Display Primitive Values
console.log(frut1);
console.log(frut2);





// The Rest Property
const nubeer = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a, b, ...rest] = nubeer;

// Display Primitive Values
console.log(`<p>a is ${a} \n b is ${b} \n the rest is ${rest} `);



/*
/// Destructuring Maps

// create a Map
const frutoo = new Map([
    ["bananan", 400],
    ["oranges", 300],
    ["apples", 200],
    ["mangos", 100]
]);

// Destructuring
let txt = "";
for (const [key, value] of frutoo{
    txt += key + " is" + value + "\n";
});
console.log(txt);
*/


// Swapping JavaScript Variables
let fname = "BIkash";
let lname = "Yamphu";

// Destructuring
[fname, lname] = [lname, fname];
console.log(fname + ' ' + lname);