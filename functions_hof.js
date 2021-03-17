function once(callback) {
    let called = false;
    return function () {
        if (!called) {
            callback(...arguments);
        }
        called = true;
    };
}

function everyOtherTime(callback) {
    let callCounter = 0;
    return function () {
        if (callCounter++ % 2 === 0) {
            callback(...arguments);
        }
    };
}

module.exports = {
    once,
    everyOtherTime,
};
