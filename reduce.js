function sum(listOfIntegers) {
    return listOfIntegers.reduce((p, c) => p + c);
}

function characterCount(listOfStrings, chr) {
    return listOfStrings.map((s) => s.split(chr).length - 1)
        .reduce((p, c) => p + c);
}

function recycle(listOfBottles) {
    function bottleValue(bottle) {
        switch (bottle.type) {
            case 'A':
                return 1;
            case 'P':
                return bottle.volume > 100 ? 2 : 1;
            case 'G':
                return bottle.volume > 33 ? 0.9 : 0.6;
            default:
                throw new Error(`Invalid bottle type '${bottle.type}'`);
        }
    }
    return listOfBottles.map((b) => bottleValue(b))
        .reduce((p, c) => p + c);
}

module.exports = {
    sum,
    characterCount,
    recycle,
};
