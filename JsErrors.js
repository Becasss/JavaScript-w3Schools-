// Throw, and try...Catch.. Finally

// The try statement defines a code block to run (to try)
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a  custom error.

// JavaScript Error Handling

try {
    addlert("Welcome Guest");

}
catch (err) {
    console.log(err.message);
}




// JavaScript try and catch
/* synax: try{
    block of code to try
    }
    catch (err){
    block of code to handle errors
    }   */





// JavaScript Thows Errors





// Input Validation Eaxmple
// This example examines input. If the value is wrong, an exception (err) is thrown.

function myFunction() {
    const message = document.getElementById('myMessage');
    message.innerHTML = "";
    let x = document.getElementById('x').value;
    try {
        if (x.trim() === "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too Low";
        ifi(x > 10) throw "too High";
    }
    catch (error) {
        message.innerHTML = "Input is" + error;
    }
}