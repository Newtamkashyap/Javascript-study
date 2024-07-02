
/*2. Write a JavaScript program that converts a callback-based function to a Promise-based function. */

function myFunction(url) {

    new Promise(function (resolve, reject) {
        fetch('//dummyjson.com/test').then(response => {
            if (!response.ok) {
                throw new Error("http error status :", response.status);

            }
            return response.json()
        })
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
}

myFunction('//dummyjson.com/test')
    .then(data => {
        console.log("response data :", data);
    })
    .catch(error => {
        console.log("error", error.message)
    })

