// Finding HTML elments by ID 

const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = "The text from the intro paragraph is:" + element.innerHTML;




// Finding HTMl elements by Tag Name:

const p = document.getElementsByTagName("p");

document.getElementById("momo").innerHTML = "The text from the intro paragraph (index 0) is: " + p[0].innerHTML;



// Finding HTML element by Class Name:

const q = document.getElementsByClassName("cls");

document.getElementById("meme").innerHTML = "The text from the intro paragraph: " + q[0].innerHTML; 



// Finding HTML element by CSS Selectors:

const r = document.querySelector("#ntro");

document.getElementById("qry").innerHTML = "The text from the intro paragraph (index 0) is: " + r.innerHTML;


// Finding HTML Element by HTML Object Collections:

const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++){
    text += x.elements[i].value + "<br>";
}
document.getElementById("frm").innerHTML = text;