/*2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run. */

//also handle the validation ,and case sensetive.

function palindromeNumbers(str) {
    if (str == str.split('').reverse().join('')) {
        console.log(str, "is palindrom")
       
    }
    else {
        console.log(str, "is not palindrom")
    }


}
palindromeNumbers("man");
palindromeNumbers("Newtam");
palindromeNumbers("121");
palindromeNumbers("MADAM");
palindromeNumbers("NitiN");
