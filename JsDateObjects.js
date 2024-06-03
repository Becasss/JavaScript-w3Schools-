// Javascript Date Objects
// Date Objects let us work with dates:

const d = Date();
console.log(d);


console.log(new Date("2023-01-23"));



// Creating Date Objects
// Date objects are created with the new Date() constructor and there are 9 ways to create a new date object:


// Javascript new Date() 
// creates a date object with the currentt date and time:

console.log(new Date());



// new Date(date string)
// new Date(date string) creates a date object from a date string:

console.log(new Date("2023-03-16"));




// new Date(year, month)
// Creates a date object with a specified date and time.

console.log(new Date(2018, 11, 24, 10, 33, 30, 0));  // Javascript counts months from 0 t0 11 i.e. January = 0 and December = 11



// Previous century 
// One and two digit years will be interpreted as 19xx:

console.log(new Date(99, 11, 24));


// new Date(milliseconds)
// creates a new date object as milliseconds plus zero time:

console.log(new Date(1000000000));



// Displaying Dates
// toString Method
// Convrting date into string
console.log(d.toString());


// toDateString() method converts a date to a more readable format.
// console.log(d.toUTCString()); // toDateString() , toUTCString(), toISOString() are not supported here.





// JavaScript Date Formats

// JavaScript ISO Dates: 
// Syntax: (YYYY-MM-DD)

console.log(new Date(2013 - 11 - 23));


// ISO Dates (Year and Month); Syntax: (YYYY-MM)
 
console.log(new Date("2015 - 02"));



// ISO Dates (Only Year) :  Syntax: (YYYY)

console.log(new Date("2022"));





// Time zones :
// When getting a date, without specfying the time zone, the result is converted to the browser's time zone.




// JavaScript Short Dates ----- syntax: (MM/DD/YY)

console.log(new Date("03/24/2021"));



// Javscript Long Dates ----- sytax: (MMMM DD YYYY)
 
console.log(new Date("Mar 25 2022"));




// Date Input - Parsing Dates
// If you have a valid date string, you can use the Date.parse() method to covert it to millisecods.
// Date.parse() returns the number of millisecond between the date and January 1, 1970:

console.log(Date.parse("March 21, 2012"));











//Date Get Date Methods

// The new Date() Constructor
// In Javascript, date objects are created with new Date() and returns a date object with the current date and time.
 

// Get the current Time
c = new Date();

w = new Date(2020 - 11 - 12);

// The getFullYear() Method:
// getFullYear() method returns the year of a date as a four digit number.

console.log(w.getFullYear);
// getMonth() -- Get month as a number (0-11)

// getDate() -- Get day as a mnumber (1-31)

// getDay() --- Get weekday as a number (0-6)

// getHours() -- Get Hours(0 -23)

// getMinutes() -- Get minute(0-59)

// getSeconds() -- Get second (0-59)

// getMilliseconds() --- Get millisecond (0 - 999)

// getTime() ---- Get time(Millisecond since January 1, 1970)






// Javascript Set Date Methods
// Set methods are used for setting a part of a date;
console.log(c.setFullYear(2020));


// setMonth()

console.log(c.setMonth(11));



// Compare Dates()
let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before may 2, 2024";

} else {
    text = "TOday is after May 2, 2024.";

}

console.log(text);






