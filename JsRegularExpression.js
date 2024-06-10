// Javascript Regular Expression
// A regular expression is a sequence of characters that forms a search pattern.



// What is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.
// Syntax: /pattern/modifiers;





// Using String Methods
// In a javascript, regular expressions are often used with the two string methods search() and replace().


// The search() Method :: uses an exppression to search for a match, and retruns the position of the match.

// The replace() Method :: retruns a moidified string where the pattern is replaced.




// Using String Search() with a  String

// Example:
let text = "Visit W3schools!";
let n = text.search("W3school");
console.log(n);     // Output: 6



// Using String Search() with a regular expression

// Example:
let xt = "Please visit W3school!";
let result = xt.search(/w3school/i);
console.log(result);         // Output: 13




// Use String replace() with a string
let txt = "Please visit W3school!";
let rst = txt.replace("W3school!", "Microsoft");
console.log(rst);            // Output: Please visit W3school!





// Use String replace() with a  Regular Expression
let st = txt.replace(/w3school/i, "Microsoft");
console.log(st);             // Output: Please visit Microsoft!





// Using the RegExp Object
// In javascript, the RegExp object is a regular expression that matches object with predefined properties and methods.

// Using test() to test:: is a RegExp object expression method.

// Example:
p = "The best things in life are free!";
let re = /free/;
console.log(re.test(p));




// Using exec() :: is a RegExp exression method

const obj = /e/.exec("Thee best things in life are free!");
console.log("Found" + obj[0] + "in position" + obj.index + "in the text" + obj.input);
