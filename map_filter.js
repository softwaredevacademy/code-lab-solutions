function stringsLength(listOfStrings) {
    return listOfStrings.map((s) => s.length)
}

function initialsOnly(listOfPeople) {
    return listOfPeople.map((p) => p.name.split(' '))
    .map((a) => `${a[0][0] + a[1][0]}`)
}

function filterThreeOrSeven(listOfIntegers) {
    return listOfIntegers.map((i) => i.toString())
    .filter((s) => s.indexOf('3') > -1 || s.indexOf('7') > -1)
    .map((s) => parseInt(s))
}

module.exports = {
    stringsLength,
    initialsOnly,
    filterThreeOrSeven,
};