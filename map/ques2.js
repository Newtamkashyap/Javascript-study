function area(a, b) {

    let areaOfRect = 1 / 2 * a + b;
    return areaOfRect;

}
// console.log(area(5,10))
//array.map(function(currentValue, index, arr), thisValue)

const arr = [1, 2, 30, 40]
const newArrays = arr.map(newArrMapping(arr))


function newArrMapping() {
    return newArrays * 10;

}
console.log(newArrMapping())

