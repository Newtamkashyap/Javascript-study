

const fetchData=new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve("hey there its me");
    },3000)
})
fetchData.then(function(value){
    console.log(value)
})



//by using callback method
// setTimeout(time,3000)
// function time(){
//     console.log("time set")
// }