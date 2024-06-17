// async makes a function return a Promise

// Example:
function myDisplayer(some) {
    console.log(some);
}


async function myFunction() {
    return "Hello World";
}
myFunction().then(
    function (value) { myDisplayer(value); }
);




// Await : makes a function wait for a promise

// Example:
async function getFile() {
    let myPromise = new Promise(function (resolve) {
        let req = new XMLHttpRequest();
        req.open('GET', "mycar.html");
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                resolve("File not found");
            }
        };
        req.send();
    });
    console.log(await myPromise);
}
getFile();