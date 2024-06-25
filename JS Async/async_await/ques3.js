

async function myDisplayer(){
    let promise=new Promise(function(resolve,reject){
       setTimeout(function(){
        resolve("here is time out");})
        
    })
    console.log(await promise)
}

myDisplayer();