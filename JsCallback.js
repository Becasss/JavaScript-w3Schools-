// A callback is a function passed as an argument to another function.


// Function Sequence : are executed in the sequencee they are called, not in the sequence theey are defined.

function myDisplay(some) {
    console.log(some);
}


function myFirst() {
    myDisplay("Hello World!");
}

function mySecond() {
    myDisplay("Good job");
}

mySecond();
myFirst();





// SEquence Control : call a calculator (myCalculator), save the result and then call another function(myDisplay) to display the result:

// EXample:
function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(10, 20);
myDisplayer(result);




// Javascript Callbacks :: A callback is a function passed as an argument to another function.

/*  function display(something) {
    console.log(something);
}

function myCalculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

myCalculator(10, 20, display);      */





// EXample2:
/// create an Array 
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x > 0);

// Display Result 
console.log(posNumbers);


// Remove negative numbers
function removeNeg(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
