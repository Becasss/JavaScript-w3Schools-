// JavaScript Bitwise Operators

// JavaScript Bitwise AND :: returns  1 if both bits are 1 otherwise 0.



// JavaScript Bitwise OR :: returns 1 if one of  bits is 1, otherwise 0. 



// JavaScript Bitwise XOR :: returns 1 if the bits are different:



// JavaScript Bitwise AND (&) :: returns 1 only if both bits are 1.

// Example:
console.log(5 & 1);



/// JavaScript Bitwise OR (|) :: returns 1 if one of the bits is 1.

// Example:
console.log(5 | 1);




// JavaScript Bitwise XOR (^) :: returns 1 if the bits are different.

// Example: 
console.log(5 ^ 1);




// JavaScript Bitwise NOT(~) :: 
console.log(~5);





// JavaScript (Zero Fil) Bitwise Left Shift (<<):: one or more zero bits are pushed in from the right and the leftmost bits fall off.

console.log(5 << 1);        // Output: 10



// JavaScript (Sign Preserving) Bitwise Right Shift(>>) :: Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off.

console.log(-5 >> 1);       // Output : -3



// JavaScript (Zero Fill) Right Shift (>>>) :: One or more zero bits are pushed in from left, and the rightmost bits fall off.

console.log(5 >>> 1);           // Output: 2




// Binar Numbers :: with only one bit set are easy to understand.




// Converting Decimal to Binary

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

console.log(dec2bin(5));            // Output :101




// Converting Binary to Decimal

function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}

console.log(bin2dec("101"));        // Output : 5


