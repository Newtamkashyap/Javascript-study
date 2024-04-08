// variable and Types 
// ANY VARIBALE NAME CAN BE DECLARED only once in a file

// Q 1. is it possible to declare sanme varibale name more thena once in a single file?.
// NO; // to avoid abiguity or consfusion to the compiler

// Q 2. Is it possible to reassign varibale's value more than 1;
// YES ;  // Reassignment is posssible n no of time to any variable , EXCEPT const variable

// varibale declation keyword [var,let, const]
// variable phase [declaration -> initialization -> assignment or reassignment]
// declaration
var x;  // any varibale declared with or without value at first time is called variable declaration
let state; //variable declaration

// initialization
x = 10; // any value assigned to value at very first time is called "variable  intialization"
state = 'A';// varibale initialization

// assignment
x = 11;
state = "Ashish";

// test
console.log(x);// 11


// var declaration  + initialization shortcut is also present 
let name = "Newtam"; // 



// const variable
/**
 * const variable forced us to initialize variable's value while declaration itself;
 */

//syntax
//const <var_name> = <any value>
const country; // Error -> it will throw error , due to above const rule
// Missing initializer in const declaration

const country2 = "India";

// Q1 is it possible to declare const variable without initialization
// ans: NO