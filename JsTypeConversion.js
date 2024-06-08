// JavaScript Type Conversion
// JavaScript variables can be converted to a new variable and another data type:

//(1). By the use of JavaScript function
// (2).Automtaically by JavaScript itself




// Converting Strings to Numbers :: The Global method Number() converts a variable (or a value) into a number.
console.log(Number("3.12"));       // Outut : 3.12
console.log(Number(Math.PI));  // Output: 3.14159265389793
console.log(Number("   "));       // Output: 0
console.log(Number(""));       // Outut : 0
console.log(Number("99 88"));      // Outut :NaN
console.log(Number("John"));      // Outut :NaN





// Unary + Operator :: Unary + operator can be used to covert a variable to a number.
let y = "5";
let z = +y;
console.log(typeof y + "\n" + typeof z);




// Converting Numbers to Strings :: The Global method String() can convert numbers to strings.

let zg = 123;
console.log(String(zg));
console.log(String(123));
console.log(String(12 + 230));


// toString() does the same.
console.log(zg.toString());
console.log((123).toString());
console.log((12 + 230).toString());



// More Methods:
// toExponential() :: returns a string, with a number rounded and written using exponential notation.
// toFixed() :: returns a string, with a number rounded and written with a specified number of decimals.
// toPrecision() :: returns a string, with a number written with a specified length




// Converting Dates to Numbers :: The global method Number() can be used to convert dates to numbers.
d = new Date();
console.log(d);
console.log(d.getTime());




// Converting Dates to Strings :: The global method String() can convert dates to strings.
console.log(String(Date()));
console.log(Date().toString());     // Does the same as above.




// Coverting Booleans to Numbers :: The global method Number() can also covert booleans to numbers
console.log(Number(true));      // returns 0
console.log(Number(false));     // returns 1
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(NaN));
console.log(Number(0));


// Converting Booleans to Strings :: The global method Number() can convert booleans to strings
console.log(Number(true)); // returns "true"
console.log(Number(false)); // returns "false"




// Automatic Type Conversion 
console.log(9 + null);         // returns 9
console.log("5" + null);    // returns: 5null
console.log("5" + 3);       // returns: 53
console.log("5" - 2);       // returns:3
console.log("5" * "5");       // returns: 25
console.log("5" / "2");         // returns:2.5




