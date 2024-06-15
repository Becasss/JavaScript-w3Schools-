// Rest Parameters:
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let x = sum(4, 5, 5, 2, 45, 33, 33, 34);
console.log((x + "\n"));




// Finding the largest number:
function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(4, 6, 9));




// Sum of all arguments

function sumAll() {
    let sum = 0;
    for (let i = 0;i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));




// My Functions
const myObject = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this;
    }
}
    console.log(myObject.fullName());




// Javascript Call() Method :: is a predefined Javascript method

//Example:
const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Bikash",
    lastName: "Yamphu"
}
const person2 = {
    firstName: "Sirjana",
    lastName: "Shrestha"
}
console.log(person.fullName.call(person1));




// the call() Method with Arguments :: can accept arguemnts

const people = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + " " + country;
    }
}
const people1 = {
    firstName: "bikash ",
    lastName: "Yamphu"
}
const people2 = {
    firstName: "Sirjana",
    lastName: "Shrestha"
}
console.log(people.fullName.call(person1, "Osho", "Norway"));



// Javascript Function apply() :: you can write a method that can be used on different objects.

const father = {

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const father1  = {
    firstName: "Bikash",
    lastName: "Yamphu"
}
const father2 = {
    firstName: "Sirjana",
    lastName: "Shrestha"
}
console.log(father.fullName.apply(father1));