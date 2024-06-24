/**2. Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]] */

const array_Clone=(arr)=>{
    return arr.slice();
    
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//By using slice()method
const originalArray = [1, 2, 3];
const clonedArray = originalArray.slice();
console.log(clonedArray);

//By using spread operator
const originalArray1=["newtam","ashish","anupam"]
const clonedArray1=[...originalArray1]
console.log(clonedArray1)