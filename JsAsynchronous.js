// Asynchronous :: Functions running in parallel with other functions are called asynchronous.


// Waiting for a Timeot :
setTimeout(myFunction, 1000);

function myFunction() {
    console.log("Hello World");
}


// In the above example, myFunction is used as a callback, myFunction is passed to setTimeout() as an argument.

/*  setTimeout(myFunction(){
    myFunction("I love You!!");
}, 3000);

function myFunction(value) {
    console.log(value);
}       */



// Waiting for Intervals :: 
// Example: 
setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
//    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}



// Example : Waiting for Timeout
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        myResolve("I love You!!");
    }, 3000);
});
myPromise.then(function (value) {
    console.log(value);
});
    


// Example3 : Waiting for a file:


function myDis(some) {
    console.log(some);
}

let mypromise = new Promise(function (resolve, reject) {
    let req = new XMLHTTPRequest();
    req.open('GET', "myCar.html");
    req.onload = function () {
        if (req.status === 200) {
            myResolve(req.response);
        } else {
            myReject("FIle not foound");
        }
    };
    req.send();
});

mypromise.then(
    function (value) {
        myDis(value);
    },
    function (value) {
        myDis(value);
    }
);

// In the above example, myFunction is used as a callback, myFunction is passed to setInterval() as an argument.




