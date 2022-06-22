// ? 1. List all the Escape Sequences characters in javascript.
// ? \n -> new line character
// ? \t -> 4 spaces
// ? \' -> '
// ? \" -> "
// ? \ -> tells that you continue from next line (Not like \n)

// ? 2. Explain with example length and substring methods in javascript
// * We can find length of string by str.length function.

// * let name2 = "Ankush"
// * console.log(name2.length); // 6

// * let name2 = String("Ankush");
// * console.log(name2.substring(0 , 3)); // end number will not be included


// ? 3. What are padStart and padEnd in javascript, explain with an example.
// * padStart and padEnd will attach specific character to start or end when we want to have a string of equal size.

// * let ACCNO = "8228928029";
// * console.log(ACCNO.padStart(15 , 0)); // 000008228928029
// * console.log(ACCNO.padEnd(15 , 0));  // 822892802900000  This is not standard Example.


// ? 4.  Define Global Object in javascript along with the global scope.
// * We can define Global Object as the objects which are available globally.
// * For example - isNaN() , undefined , NaN , var , window(for Browser only) ,  global(for Node only) 

// * Global Scope means we can access them at any place within the same code file.

// * For example - 
// * console.log(ACCNO);   // undefined
// * var ACCNO;

// ? 5. List all the names of Javascript engines present currently. 
// * v8 (Popular and Fastest)
// * chakra
// * spidermonkey