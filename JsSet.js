// JavaScript Sets
// A Javascript set is a collection of unique values and each value can only occur once in a set. The values can be of any type, primitive values or objects.



// How to Create a set
// (1) Passing an array to new  Set()

// Example:
const letters = new Set(["a", "b", "c", "d"]);
console.log(`The set has ${letters.size} elements.`);


let numbers = new Set();
// Add values to  the set.
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);

console.log(numbers);
console.log(`numbers: ${numbers.size}`)




// The Add() Method

// Create a set and add variables
const name = new Set();

const fname = "Bikash";
const lname = "Yamphu";
const age = 27;
const address = "Sankhuwasabha";

// Add variablees to the set
name.add(fname);
name.add(lname);
name.add(age);
name.add(address);

console.log(name);





// Listing the Elements
let text = "";
for (const x of name) {
    text += x + "\n";
}
console.log(text);




// Sets are Objects
console.log(typeof name);




// The has() Method  :: Returns true if a specified value exists in a set.

// Does the set contain "Bikash"?
answer = name.has("Bikash");
console.log(answer);            // Output : true




// The forEach() Method :: invokes a function for each set element

let txt = "";
name.forEach(function (value) {
    txt += value + "\n";

});
console.log(txt);




// The Values() Mehod :: returns an iterator object with the values in a set.

const myIterator = letters.values();

let xxt = "";
for (const x of myIterator) {
    xxt += x + "\n";
}
console.log(xxt);




// The Keys() Method :: returns an iterator object with the values in a set.

const mIterator = letters.keys();

let xt = "";
for (const x of mIterator) {
    xt += x + "\n";
}
console.log(xt);





/// The entries() Method :: returns an iterator with [value,value] pairs from a set.

const Iterator = letters.entries();
let value = "";
for (const x of Iterator) {
    value += x + "\n";
}
console.log(value);