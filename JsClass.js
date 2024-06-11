// Javascript Class Syntas :: Use the keyword class to create a class
// Always add a method named constructor();

// Syntax:
/* class ClassNam{
constructor(){.........}
}   */




// Example:
class car{
    constructor(name, model, color){
        this.name = name;
        this.model = model;
    }
}
const myCar1 = new car("Ford", 2014);
const myCar2 = new car("Audi", 2014);

console.log(myCar1.name + " " + myCar2.name);
// Car class to create two car objects





// Constructor Method
// It has to havee the exact name "constructor", it is executed automatically when a new object is created and it is used to initialize the object properties.



// Class Methods :: Use the keyword class to creae a class and always add a constructor() method.

// Example:
class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const myCar = new Car("Ford", 2014);
console.log(`My car is ${myCar.age()} years old.`);





// You can send parameters to class methods
