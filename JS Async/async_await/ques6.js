/*4.Write a JavaScript function that takes an array of URLs and downloads the contents
 of each URL in parallel using Promises. */

 function myFunction(){
    const promises=urls.map(url=>{
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response =>{
                if(! response.ok){
                    throw new Error("http error status :",response.status);
                }
                return response.text();
               
            })
            .then(data=>resolve(data))
            .catch(error=>reject(data));
        });
    });
    return Promise.all(promises);
 }
 const urls=[
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
 ];

 myFunction(urls)
 .then(contents=>{
    console.log("download contents",contents)
 })
 .catch(error=>{
    console.log("error",error.message)
 });