function reverse_string(num) {

    let spt = num.split("");
    console.log("spliting the string", spt)
    let rev = spt.reverse();
    console.log("reversing the string", rev)
    let jn = rev.reverse().join("");
    return jn;


}
console.log(reverse_string("123"))