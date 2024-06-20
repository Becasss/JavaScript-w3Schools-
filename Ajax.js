// AJAX Introduction::
// Read data from a web server and update a web page without loading the page and send data to a web server;


// AJAX : Asynchronous Javascript And XML
//AJAX is not a programming language


// Example:
function loadDoc() {


    // Create an XMLHttpRequest Object
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML =
            this.responseText;
    }

    // send a request
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}



// AJAX - The XMLHttpRequest Object :


// Createe an XMLHttpRequest Object
// syntax :: variable = new XMLHttpRequest();




// Define a callback function :
// styntax: xhttp.onload = function () {
    // what to do when the response is ready  }



// Send a Request :
// Syntax: xhttp.open("GET", "ajax_info.txt");
// xhttp.sendd();



// Multiple Callback Functions :



// The onreadystatechange function:

function lodDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            document.getElementById('momo').innerHTML
                = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}
