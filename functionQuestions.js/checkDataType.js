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



