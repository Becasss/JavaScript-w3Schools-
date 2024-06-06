// JavaScript Switch Statement
// The switch statement is used to perform different actions based on different conditions.

/* syntax: 
    switch(expression){
    case x:
    // code block
    break;
    case y:
    // code block
    break;
    case a:
    // code block
    beak;
    default:
    // code block
    }

*/
let day;
switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "MOndaa";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wnesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    default:
        day = "Saturaday";
}

document.getElementById("date").innerHTML
    = "Today is " + day;




let text;
switch (new Date().getDay()) {
    case 6:
        text = "TOday is Saturday";
        break;
    case 7:
        text = "Today is Sunay";
        break;
    default:
        text = "Lookig forward to the weekend";
}
document.getElementById("wknd").innerHTML
    = text;