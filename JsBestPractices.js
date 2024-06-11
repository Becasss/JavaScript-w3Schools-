// JavaScript Best Practices
// Avoid global variables, avoid new, avoid ==, avoid eval()


// Avoid global variables :: Use local variables instead and learn how to use closures.


// Always use local variables :: all variabls used in a function should be declared as local variables.


// Declarations on Top :: It is a good conding practice to put all declarations at the top of each script or function.

let firstName, lastName, price, discount, fullprice;

firstName = "Bikash";
lastName = "Yamphu Rai";

price = 19.0;
discount = 0.2;

fullprice = price - discount;

fullName = firstName + " " + lastName;
console.log(`The total price is ${fullprice} and the fullName is ${fullName}`);




// Initialize Variables :: It is a good coding practice to initialize vaariables when you declare them.

// Declare and initialize at the begining
let fName = "";
let lName = "";
let prce = 0.0;
let dicnt = 0.34;
let fulPrice = 0;
const myAray = [];
const myObject = {};


// Declare object with const :  will prevent any accidental change of type.
// Example:
const myOect = {
    firstName: "Bikash",
    lastName: "Yamphu Rai",
    price: 19.0,
    discount: 0.2,
    fullPrice: 0,
    fullName: ""
};  // Changes object is not possible



// Declare array with const :  will prevent any accidental change of type.
//Example:
const myArray = [
    "Bikash",
    "Yamphu Rai",
    19.0,
    0.2,
    0,
    ""
];  // Changes array is not possible




// Don't use new Object




// Be Aware of automatic type conversions
let x = "hello world";
x = 5;
console.log(typeof x); // Output:number




// Use === Comparison ::
// the == comparison operator always converts (to matching types) before comparison
// the === operator forces comparison of values and type:

console.log(0 == ""); // Output:true
console.log(1 == '1'); // Output:true
console.log(1 == true); // output: true

console.log(0 === ""); // output:false
console.log(1 === '1'); // output:false
console.log(1 === true); // output:false



// Use parameter Defaults :: if a function is calld with a missing arguemnt, the value of the missing argument is set to undefined.

function myfunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
    return x + y;
} console.log(myfunction(4));




// End Your Switches with Defaults :: 
// Example:
let day;
switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "MOndaa";
        break;
    case 2:
        day = "Tuesday";
        break;
    default:
        day = "unknown";
} console.log(`Today is ${day}`);





// Avoid Number, String, and Boolean as Objects :: Always treat numbers, strings or booleans as primitiv values. Not as objects.

let y = "BIkash";   // y is a string
let z = new String("BIkash");   // z is an object
console.log(y === z);






/// Avoid Using Eval() : eval() function is used to run text as code.



