function logAll(listOfIntegers) {
    listOfIntegers.forEach((x) => console.log(x));
}

function squareList(listOfIntegers) {
    return listOfIntegers.map((x) => x * x);
}

function onlyPositives(listOfIntegers) {
    return listOfIntegers.filter((x) => x >= 0);
}

function firstNegative(listOfIntegers) {
    return listOfIntegers.find((x) => x < 0);
}


// <APPEND>
module.exports = {
    logAll,
    squareList,
    onlyPositives,
    firstNegative,
};
