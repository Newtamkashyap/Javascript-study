/*1. Write a JavaScript function that takes a callback and invokes it after a delay of
 2 second. */


 function timeInvoked(args){
    setTimeout(args,2000)

 }

 function myFunction(){
    console.log("here time is invoking after 2 secs")
 }

 timeInvoked(myFunction);
 
