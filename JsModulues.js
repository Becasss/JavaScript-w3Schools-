// Modules :: allow you to break up your code into sepearate files.
// Makes it easier to maintain a code- base and modules are imported from external files with the import statement.

// Example:
/*import message from './message.js';

console.log(message()); */



// Export :: Modules with functions or variables can be stored in any external file. Two types of exports: Name Exports and Default Exports.

// Named Exports

// In-line Individually :: person.js

/*  export const name = "Bikash";
export const age = 40;
*/


// All at once at the bottom:: person.js

/*     const name : "james";
        const age : 28;
  
        export {name, age};
 */






// Default Exports: 

/*      const message = () => {
    const name = "BIkash";
    const age = 50;
    return name + "is" + age + "Years old.";
 };
 export default message;
  */




// Import :: 
 
// Import from named exports: import named exports from the file person.js:
// import {name,age} from "./person.js";


// Import from default exports: Import default exports from the file person.js
// import message from "./message.js";