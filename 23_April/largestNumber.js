// 31. Write a JavaScript program to find the largest of three given integers.

function findLargeNumber(){
    let a=220;
    let b=302;
    let c=502;
    if(a>b){
        console.log(a," is the largest number");
    }
    else if(b>c){
        console.log(b," is the largest number");
        
    }
    else{
        console.log(c," is the largest number");

    }
}
 findLargeNumber();

function findLargestNumber(a,b,c){
   
    if(a>b){
        console.log(a," is the largest number");
    }
    else if(b>c){
        console.log(b," is the largest number");
        
    }
    
    else{
        console.log(c," is the largest number");

    }
}
 findLargestNumber(10000,3000,2000);