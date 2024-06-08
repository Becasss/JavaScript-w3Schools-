// JavaScript Maps 
// A map hold key-value pairs where the keys can be any datatype.
// A map remembers the original insertion order of the keys


// How To create a Map
// (1). Passing an Array to new Map()

const fruits = new Map([
    ["apple", 500],
    ["orange", 300],
    ["banana", 200]
]);

let numb = fruits.get("apple");
console.log(`There are ${numb} apples.`);




//(2). Ceate a Map and use Map.set()

// Create a new Map
const name = new Map();

// set the Map Values
name.set("Bikash", 2054);
name.set("John", 2051);
name.set("John", 2052);
name.set("Vicky Doneer", 2049);
let value = name.get("John");
console.log(`The birthday of John is ${value}.`);



// The Get Method  :: Gets the value of a key in a Map.
console.log(name.get("Bikash"));



// Maps are Objects
console.log(typeof name);







// JavaScript Map Methods 

// (1). The new Map Method()
const letters = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6]
]);
console.log(letters);



// Map.get()  :: you get the valur of the key in a map with the get() method.
console.log(letters.get('a'));



// Map.set() :: you can add elelments to a map with the set() method.
let numbers = new Map();
 
numbers.set("Banana", 300);
numbers.set("Orange", 200);
numbers.set("Yellow", 100);
console.log(numbers);




// Map.size()  :: returns the number of elements in the map.
console.log(numbers.size);      // Outut : 3






// Map.delete() :: deletes or removes a map elements.


numbers.delete("Banana");
console.log(numbers);





// Map.clear() :: clears or removes all the elements from a map.

numbers.clear();
console.log(numbers);



// Map.has(key) :: returns true if a key exists in the map

name.has("Yamphu");
console.log(name.has("Yamphu"));




// Map.forEach(key) :: invokes the a callback function for each key/value pair in the map.

let text = "";
name.forEach(function (value, key) {
    text += key + " is " + value + "\n";
})
console.log(text);



// Map.entries() :: returns an iterator object with the [key,values] pairs in the map.

let txt = "";
for (const x of name.entries()) {
    txt += x + "\n";
}
console.log(txt);



// Map.keys() :: returns an iterator object with the keys in the map
let xt = "";
for (const x of name.keys()) {
    xt += x + "\n";
} console.log(xt);




// Map.values() :: returns an iterator object with the values in the map.
let tx = ""; 
for (const x of name.values()) {
    tx += x + "\n";
} console.log(tx);




// Objects as Keys
// create an object
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };


// create a Map
const fruit = new Map();

// ADd the objects to the Map
fruit.set(apples, 500);
fruit.set(bananas, 300);
fruit.set(oranges, 200);

console.log(fruit.get(apples));         // Output : 500






// JavaScript Map.groupBy()
// method groups elements of an object according to the string values returned from a callback function and does not change the original object.

// Create an Array
const frutoo = [
    { name: 'apples', quantity: 100 },
    { name: 'banana', quantity: 500 },
    { name: 'burger', quantity: 300 },
    { name: 'oranges', quantity: 250 },
    { name: 'cheese', quantity: 340 }
];

// callback function to select low volumes 
function mycallback({ quantity }) {
    return quantity > 200 ? "Ok" : "low";

}


// Group by ok and low
const result = Map.groupBy(frutoo, mycallback);


// Display results
let xet = `These Fruits are OK:\n`;
for (let x of result.get("Ok")) {
    xet += x.name + ' ' + x.quantity + "\n";
}
xet += `\n  These fruits are Low:\n`;;
for (let x of result.get("low")) {
    xet += x.name + ' ' + x.quantity + "\n";
}
console.log(result.get("ok"));