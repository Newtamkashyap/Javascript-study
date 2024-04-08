function findSum(a,b){
    let sum=(a*a)+(b*b)+2*a*b
    return sum;

}
// console.log(findSum(5,10))



function findSub(a,b){
    let sub=(a*a)-(b*b)+2*a*b
    return sub;

}
// console.log(findSub(5,10))



function sumOfNumber(a,b){
    let sum=(a*a*a)+(b*b*b)+(3*a*a)*b+(3*b*b)*a
    return sum;
}
// console.log(sumOfNumber(5,10))




function printTable(){
     let num=5
     let temp=[];

for(i=1;i<=10;i++){
  
    temp.push(`${num}*${i}=${num*i}`)
}
return temp;
}

console.log(printTable())



function table(num,j,i){
    for(i;i<=j;i++){
console.log(`${num}*${i}=${num*i}`)
    }
}
// table(3,20,5)
// table(5,20,5)
