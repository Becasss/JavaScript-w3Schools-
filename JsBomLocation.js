// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.


// Window location Href :

document.getElementById("href").innerHTML
    = "The full URl of this page is: " + window.location.href;


// Window Location Hostname:
    
document.getElementById("host").innerHTML
    = "Page hostname is :" + window.location.hostname;


// Window Location Pathname :

document.getElementById("pathname").innerHTML
    = "Page pathname is :" + window.location.pathname;




// Window Location protocol:

document.getElementById("pro").innerHTML
    = "Page protocol is :" + window.location.protocol;


// Window Location Port:

document.getElementById("port").innerHTML
    = "Page port is :" + window.location.port;


// Window Location Assign:
document.getElementById("load").innerHTML  
    = "Page load is <br>" + window.location.href;




// Javascript Window History:


// Window History Back :: Loads the previous URL in the history list.

function goBack() {
    window.history.back();
}


// window Histroy Forward :: Loads the next URL in the history list.

function goForward() {
    window.history.forward();
}