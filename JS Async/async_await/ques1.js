

async function myFunction(){
    return "hello"
}
console.log(myFunction());
myFunction()

//===========================OR================================
function myFunction2(){
    return Promise.resolve("helloooooooooo")
}
console.log(myFunction2());


//===========================OR=============================
function myDisplayer(args){
    console.log(args)
}

async function myFunction3(){
    return "hi how are you";
}

myFunction3().then(
    function(value){myDisplayer(value);

    },

    function(error){
        myDisplayer(error);
    }
);