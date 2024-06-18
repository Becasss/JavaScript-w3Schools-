// In this example, a function is called from event handler:

function changeText(id) {
    id.innerHTML = "OOpps!";
}


//  HTML EVents attributes

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}



/// 

document.getElementById("myBtn").onclick = dislayDate;

function dislayDate() {
    document.getElementById("btn").innerHTML = Date();
}


// The onload Attribute
function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled";
    } else {
        text = "Cookies are not enabled";
    }

    document.getElementById("cookie").innerHTML = text;
}


// oninput Event :: is often do some action while the user input data.

function upperCase() {
    const x = document.getElementById('fname');
    x.value = x.value.toUpperCase();
}


// Onchange Event :: is often used in combination with validation of input fields.
function upperCase() {
    const x = document.getElementById('surname');
    x.value = x.value.toUpperCase();
}




// onmouseover and onmouseout events :: can be used to trigger a function when the user mouses over, or not of an HTML element.

function mOver(obj) {
    obj.innerHTML = "Thank You"
}
function mOut(obj) {
    obj.innerHTML = "Mouse over me"
}
