/*4. Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */
//Q-validation 

function arranging_in_alphabetical_order(str){
     console.log("original string is =",str);
    if(str=str.split('').sort().join('')){
     
        console.log("after arranging string is =",str);
        return str,"Hence, string is in alphabetical order"
    }
  

}
// console.log(arranging_in_alphabetical_order("abcd"));//abcd
// console.log(arranging_in_alphabetical_order("0809"));//0089

console.log(arranging_in_alphabetical_order("newtam"));//aenmtw
