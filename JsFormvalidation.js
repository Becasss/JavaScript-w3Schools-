// Javascript Form Validation

function validateForm() {
    let x = document.forms["myForm"]["fname"].values;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}





// Javascript Can Validate Numberic input
function myFunction() {
    let x = document.getElementById("numb").value;  // get the value of the input field with id="numb"

    let text;   // If x is Not a Number or less than one or greater than 10.
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input is not valid";
    } else {
        text = "Input is valid";
    }
    document.getElementById("demo").innerHTML = text;
}