/* 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
 Return true if one or more of them are in the specified range. */

function checkingRange(a, b, c) {
    if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkingRange(8,90,8));
console.log(checkingRange(80,9,8));
console.log(checkingRange(8,0,89));
console.log(checkingRange(8,900,8));
