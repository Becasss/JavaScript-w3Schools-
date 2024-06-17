// Javascript Promise Object :: A promise contains both the producing code and calls to the consuming code:



// Example: 
function myDisplay(something) {
    console.log(something);
}


let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    //  some code (try to change x to 5)
    
    if (x == 0) {
        myResolve("Success");
    }
    else {
        myReject("Error");
    }

});
myPromise.then(
    function (value) { myDisplay(value); },
    function (err) { myDisplay(err); }
);

// Output: Success