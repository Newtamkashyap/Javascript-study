

async function myDisplayer(){
    let promise=new Promise(function(resolve,reject){
       setTimeout(function(){
        resolve("here is time out");},1000)
        
    })
    console.log(await promise ,"jjj")
}

myDisplayer();