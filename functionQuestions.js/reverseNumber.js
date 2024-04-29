/*1. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223*/

function reverse_a_number(num) {

console.log("Reversing the original number",num)
let result = num.toString().split('').reverse().join('');
return result;
}

console.log(reverse_a_number(83455566));
 console.log(reverse_a_number("hello"));


