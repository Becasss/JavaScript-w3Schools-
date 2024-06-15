// JavaSCript Object Definition:

// Methods for Defining JavaScript Objects

//(1). Using an Object Literal  is:: is a list of property names:values inside curly braces{}.
// Example: {firstName: "Bikash". lastName:" Rai", age: 27, eyeColor: "blue"};
// Note: An object literal is also calledan object initializer.





//(2). Creating a Javascript Object:
// Exmple:
const person = {};      // Create an empty object

person.firstName = "Bikash"; //Add properties
person.lastName = "Rai";
person.age = 27;
person.eyeColor = "blue";


document.write(person.firstName+ ' ' + person.lastName  + "<br>");      // Displaying Data from Object:





// Object Constructor Functions
// Sometimes we need to create many objects of the same type, to create an object type we can use an object constructor function.
// Object Type Person:

function Person(first, last, age, eyeColor) {   // Constructor Function for Person objects
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
}
const myFather = new Person("Dhan", "Bahadur Rai", "60", "blue");   // Create a person object
const myMother = new Person("Indra", "Kumari Rail", "60", "blue"); // Create a mother object
const mySister = new Person("Shanken", "Rai", "29", "black"); // Create a sister object


document.write('My father is ' + myFather.age + '.\n');




// Property Default Values  :: a value given to a property wil be default value for all objects created by the constructor.

function people(first, last, age, eye) {    // Constructor functin for people objects
    this.firtName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Neplali";
}


const myfather = new people("Dhan", "Bahadur Rai", 60, "black");
const mymother = new people("Indra", "Kumari Rail", 60, "blue");


document.write("My father is " + myfather.nationality + "." + "My mother is " + mymother.nationality + ".");    // Display Nationality






// Javascript Object Methods:
// (1). General Methods

/*
// copies properties from  a source object to  target object
Object.assign(target, source)



// Creates an object from an existing Object
Object.create(object)


// Returns an array of the key/value pairs of an object
Object.entries(object)



// Creates an object from a listtof keys/values
Object.fromEntries()


// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)

*/




// Object Protection Methods:

/*
 // Prevents re-assignment
 const car = {type:"Fait", model:"500", color:"white"};

 // Prevents adding object properties
 Object.preventExtensions(object)


 // Returns true if properties can be addes to an object
 Object.isExtenisble(object)

 // Prevents adding and deleting object properties
 Object.seal(object)


 // Returns true if object is sealed
 Object.isSealedd(object)

 // Prevents any Changes to an object
 Object.freeze(object)


 // Returns true if object is frozen
 Object.isFrozen(object)

*/


// JavaScript Object Prototypes:
//  All JavaScript objects inheri properties and methods from a prototype:
 
// Date Object inherit form Date.prototype
// Array object inherit from Array.prototype
// Person objects inherit from person.prototype


/// Adding Properties and Methods to Objects

// Using the prototype Property
// EXample:
function village(name, population, age) {
    this.name = name;
    this.population = population;
    this.age = age;
}

village.prototype.location = "Sankhuwasabha";
const myVillage = new village("Num",3000, 1910);

document.write("The nationality of my father is" + village.location);
