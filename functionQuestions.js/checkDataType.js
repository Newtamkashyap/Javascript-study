/*9. Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, 
number, string, and undefined. */

function hello(a){
    
    return a;

}
console.log(typeof(hello("newtam")));
console.log(typeof(hello(true)));

console.log(typeof(hello(1)));

console.log(typeof(hello({name:"netam",age:24})));

console.log(typeof(hello([1])));
console.log(typeof(hello()));
console.log(typeof(hello(function(){})));
console.log(typeof(hello(null)));

/*NOTE:-
The data type of NaN is number
The data type of an array is object
The typeof operator returns "object" for arrays because in JavaScript arrays are objects.
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined  */



