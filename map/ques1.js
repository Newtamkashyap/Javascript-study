


function Mapping(){
   var fruits= new Map();
   fruits.set("apple",200) 
   let fruitsGet=fruits.get("apple")
   console.log(fruitsGet)
}
// Mapping()


function arrayMapping(){
   var fruits=new Map([
      ["apple",200],
      ["banana",300],
      ["grapes",500]
   ]);
   console.log( fruits instanceof Map)
}
arrayMapping()
