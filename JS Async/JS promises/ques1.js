
function callBack(args){
    console.log(args)
}

let myPromises=new Promise(function(resolve,reject){
    let x=10;

    if(x===0){
        resolve("Ok");
    }
    else{
        reject("Error")
    };
})

myPromises.then(
    function(value){
        callBack(value);
    },
    function(error){
        callBack(error,"there");

    }
);
