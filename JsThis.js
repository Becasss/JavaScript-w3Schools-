// What is this?
// In javscript, the this keyword refers to an object. "this" keyword refers to different objects depending on how it is used.


// this in a method :: when used in an object method, this refers to the object.

// Exampele:

const person = {
    firstName: "Bikash",
    lastName: "Yamphu Rai",
    age: 27,
    id: 16726,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
    console.log(person.fullName());




// this Alone :: When used alone, this refers to th global object

let x = this;
console.log(x);

// In strict mode, when used alone, this also refers to the global ojbect.
'use strict';
 let y = this;
console.log(y);




/// this in a Function (strict) :: JavaScript strict mode does not allowed default bindindg.

"use strict";
console.log(myFunction());
function myFunction() {
    return this;
}


// this in Event Handlers :: this refers to the HTMl elemlent that received the event:
/* <h1> The JavaScript event </h1>
<button onclick="this.style.display = 'none';>Click to remove me!</button>
 */


// Object Method Binding : in these exaample, this is the person object that

const prsn = {
    firstName: "Bikash",
    lastName: "Yamphu Rai",
    age: 27,
    id: 16726,
    myFunction: function () {
        return this;
    }
};
console.log(prsn.myFunction());




// Explicit Function Binding : the call() and apply() methods are predefined Javascript methods.

const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastNamel;
    }

}
const person2 = {
    firstName: "Bikash",
    lastName: "Yamphu Rai"
}
let a = person1.fullName.call(person2);
console.log(a);




// Function Borrowing :: with the blind() method, an object can borrow a method fromm another object
const man = {
    firstName: "Bikash",
    lastName: "Yamphu Rai",
    age: 27,
    id: 16726,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const member = {
    firstName : "Hege",
    lastName : "Nisen"
}
let fullName = man.fullName.bind(member);
console.log(fullName());