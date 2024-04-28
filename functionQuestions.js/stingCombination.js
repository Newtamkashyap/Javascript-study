/*3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g */

function generate_combination_ofString(str) {
    let arr=[];
    for (i= 0; i <= str.length; i++) {
        console.log("string length is = ",str.length);
        arr.push(str);
        return arr;
    }

}
console.log(generate_combination_ofString("dog"));