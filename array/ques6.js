/*6. Write a JavaScript program that accepts a number as input and inserts dashes (-)
 between each even number. For example if you accept 025468 the output should be 
 0-254-6-8. */

 function even(n){
    var result=[]
    var str=n.toString();
  for(var x=1; x<str.length;x++){
    if((str[x-1]%2===0)&&(str[x]%2===0)){
        result.push('-',str[x]);
    }
    else{
        result.push(str[x])
    }
  }
  console.log(result.join(''))

 }
 even(1234567890)
 