


async function myDisplayer(){
    let promise=new Promise(function(resolve,reject){
        resolve("it execute successfully");
    });
    console.log(await promise);

}
myDisplayer();