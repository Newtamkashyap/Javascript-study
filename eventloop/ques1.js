//Event loop
console.log("Starts")
setTimeout(()=>{
    console.log("Timeout");
},0);

Promise.resolve().then(()=>{
    console.log("promise")
});
console.log("end")