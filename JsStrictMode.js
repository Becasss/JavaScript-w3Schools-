// Javascript Use Strict
// "Use strict"; Defines that JavaScript codes should be executed in "strict mode"


// Example:
/* x = 3.14;  // This will not cause an error.
myfunction();
"use strict";
y = 3.14; // This will an cause an error(y is not defined).
} 
*/


//  Not Allowed in Strict Mode:
//(1). Using a variable, without delcaring it, is not allowed.

'use strict';
x = 3.14; // This will cause an error ( x in not defined).

// (2). Using an object, without declaring it, is not allowed.

"use strict";
function x(p1: 10, p2: 20) { }; //  This will cause an error.(x is not defined).



//(3). Deletinga variable (or object) is not allowed.

"use strict";
x = 3.14; // This will cause an error (x is not defined).
delete x; // This will cause an error (x is not defined).

//(4). Deleting a function is not allowed.

"use strict";
function x(p1, p2) { };
delete x; // This will cause an error (x is not defined).




//(5). Duplicating a parameter name is not allowed.

"use strict";
function x(p1, p1) { }; // This will cause an error (p1 is already defined).



// (6). Octal numberic literals are not allowed

"use strict";
var x = 010; // This will cause an error (Octal literals are not allowed).


// (7).Octal escape characters are not allowed
 "use strict";
var x = "\010"; // This will cause an error (Octal literals are not allowed).


// (8). Writing to a read-only property is not allowed.

"use strict";
const obj = {};
Object.defineProperty(obj, "y", {value:0, writable: false });
obj.y = 3.14; // This will cause an error (y is read-only).


// (9). Writing to a get-only property is not allowed.

'use strict';
const obj = { get x() { return 0 } };
obj.x = 3.14; // This will cause an error (x is a get-only property).




// (10). Deleting an undeletable property is not allowed.

'use strict';
delete Object.prototype; // This will cause an error (


// (11). The word eval cannot be used as variable:

'use strict';
var eval = 0; // This will cause an error (eval is a reserved word).


// (12). The word arguments cannot be used as variable:

'use strict';
let arguments = 3.14; // This will cause an error (



// (13). The with statement is not allowed

'use strict';
with (Math) {
    x = cos(2);
} // This will cause an error (with statement is not allowed).



// For security reasons, eval() is not allowed to createe variables in the scope from which it was called.

'use strict';
eval("var x = 3.14"); // This will cause an error (x is not defined).
alert(x); //



// In strict mode, eval() can not  declare a variable using the var keyword
'use strict';
eval("var x = 2");
alert(x); // This will cause an error (x is not defined).



// eval() can not declare a variable using the let keyword
eval("let x = 3.14");
alert(x); // This will cause an error (x is not defined).




