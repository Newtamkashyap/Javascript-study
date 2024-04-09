function ludoGame() {
    let num = 5;

    if (num === 6) {
        return "six"
    }
    else if (num === 5) {
        return "five"
    }
    else if (num === 4) {
        return "four"
    }
    else if (num === 3) {
        return "three"
    }
    else if (num === 2) {
        return "two"
    }
    else {
        return "one"
    }
}
// console.log(ludoGame(6))


function ludo(num) {
    if (num === 6) {
        return "six"
    }
    else if (num === 5) {
        return "five"
    }
    else if (num === 4) {
        return "four"
    }
    else if (num === 3) {
        return "three"
    }
    else if (num === 2) {
        return "two"
    }
    else {
        return "one"
    }
}
// console.log(ludo(1))

function ludoGameDetail1() {
    //with break statement
    let num = 3
    switch (num) {
        case 1:
            console.log("one")
            // break;
            

        case 2:
            console.log("two")
            // break;

        case 3:
            console.log("three")
            // break;

        case 4:
            console.log("four")
            // break;

        case 5:
            console.log("five")
            // break;

        case 6:
            console.log("six")
            // break;

        default:
            console.log("Dice niche gir gaya fir se pungao")
            // break;

    }
}
  ludoGameDetail1()


function ludoGameDetail(num) {
// with return statement
    switch (num) {
        case 1:
            return "one";

        case 2:
            return "two";

        case 3:
            return "Three";

        case 4:
            return "Four";


        case 5:
            return "Five";


        case 6:
            return "six";

        default:
            return "Dice niche gir gaya"
    }
}
// console.log(ludoGameDetail(4))