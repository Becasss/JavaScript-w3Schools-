// JavaScript Common Mistakes

// (1). Accidentally Using the Assignment Operators: if a programmmer uses an assignment operator (=), instead of a comparison operator (==):
let x = 0;
console.log(Boolean(x == 10));  // retturns false bcoz x is not equal to 10.



let y = 0;
console.log(Boolean(y = 10)); // retturns true bcoz 100 is true.



let a = 0;
console.log(Boolean(a = 0)); // retturns false bcoz 0 is false.






// EXpecting Loose Comparison  : In regular compariso, data type does not matter. This if statment returns true:
let b = 10;
let c = "10";
console.log(Boolean(b == c));  // retturns true bcoz 10 is equal to "10".




let n = "10";
console.log(Boolean(x === n)); // returns false, in strict comparison , datatype doesnot matter.




// Common Mistake in Switch case:
let t = 10;
switch (t) {
    case 10:
        console.log("x is 10");
}



// Case switch will not display an alert:
let e = 10;
switch (e) {
    case "10":
        console.log("Hello");
}




// Confusing Addition & Concatenation : Additon is about adding numbers and concatenations is about adding strings.

console.log(b + n);

m = b + n;
console.log(m);





// Misunderstanding Floats : 
let q = 0.1;
let w = 0.2;
let p = q + w;
console.log(p);





// Breaking a Javascript String : allow you to break a statementt into two lines but breaking  a stateement in the middle of a string will not work.




// Misplacing Semicolon:
let u = 5;
if (u == 19);
{
    console.log("Hello");
}




// Breaking a REturn Statement:

function myfunction(a) {
    let power = 10;
    return a * power;
}
console.log(myfunction(88));



// explanation: If a statement is incomplete, javascript will try to complete the statemetn by reading the next line.





// Accessing Arrays with Named Indexes: Arrays with named indexes are called associated arrays (or hashes).
const person = [];
person[0] = "Bikash";
person[1] = "Yamphu";
person[2] = 46;
console.log(person[0] + " " + person[1] + " " + person[2]);


// IN javascript, Objects are named indexes
const person1 = [];
person1.firstName = "Bikash";
person1.lastName = "Yamphu";
person1.age = 46;
console.log(person1[0] + " " + person.length);
