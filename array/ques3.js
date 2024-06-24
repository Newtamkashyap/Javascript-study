/*3. Write a JavaScript function to get the first element of an array. Passing the 
parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] */


var first=(array,n)=>{
    if(array===null){
        return 0;
       
    }
    if(n===null){
        return 0;
            
    }
    if(array<0){
        return [];
    }
}