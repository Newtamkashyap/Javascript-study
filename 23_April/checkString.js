// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

function checkingString() {
    const str = "javapoint";
    if (str.startsWith("java")) {
        console.log(str,"does")
    }
    else{
        console.log("not starts with java")
    }


}
// checkingString();

function checking(){
    const elements=["java","python","html","javaPoint","javascript"];
    for(let i of elements){
        if(i.startsWith("java")){
            console.log(i,",length =" , i.length)
            // console.log(i.length)
        }
      
    }
}
checking();