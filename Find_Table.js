function findTable(num, startingCount, endingCount) {

    for (startingCount; startingCount <= endingCount; startingCount++) {
        console.log(`${num}*${startingCount}=${num * startingCount}`)

    }
}
// findTable(2,1,10)
// findTable(5,5,10)


function table(num, startingCount, endingCount) {
    let temp = []
    for (startingCount; startingCount <= endingCount; startingCount++) {
         temp.push(`${num}*${startingCount}=${num * startingCount}`)//it will push all the values in empty array.
        //   temp.pop(`${num}*${startingCount}=${num * startingCount}`)//it will pop(remove) all the values in empty array.)

    }
    return temp;

}
console.log(table(7, 1, 20))

