// JavaScript Booleans
// A Javascript Boolean represents one of two values: ture of false.



// The Boolean() Function
// You can use the Boolean() function to find out if an expression (or a varaible) is true:
        

// For example:
console.log(Boolean(10 > 9));
console.log(9 > 7);


// Everything with a "Value" is True
console.log("100 is =", Boolean(100));
console.log(`3.14 id ${Boolean(3.14)}`);
console.log(`-16 is ${Boolean(-16)}`);
console.log(`Even the string 'false' is` + Boolean('false'));
console.log("Any experssion (except zero id" + Boolean(1 + 7 + 3.14));





// Everything without a "Value" is False

// FOr example;
let x = 0;
console.log(Boolean(x)); // Output : False


let xu = -0;
console.log(Boolean(xu)); // Output: False


let y = "";
console.log(Boolean(y));  // Output: False



let a = null;
console.log(Boolean(a));    // Output: False




let b = false;
console.log(Boolean(b));    // Output : False


let c = 10 / "Hallo";
console.log(Boolean(c));        // Output : False




// JavaScript Booleans as Ojbects
// Normally Javascript booleans are primitive values created from literals.

let o = new Boolean(false);
console.log(o); 
console.log(typeof o); // Output: Object





