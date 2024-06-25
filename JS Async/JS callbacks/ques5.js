
/* find all positive number from an array */

const arr=[1,2,-4,5,-10]

const posNumber=newArray(arr,(x)=>x >=0);
console.log(posNumber)

function newArray(numbers,callback){
    const myArray=[];
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray;
}

