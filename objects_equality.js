function shallowEqual(obj1, obj2) {
    const sameLength = Object.keys(obj1).length === Object.keys(obj2).length;
    const samePropertyValues = Object.keys(obj1)
        .reduce((isEqual, key) => isEqual && obj1[key] === obj2[key], true);
    return sameLength && samePropertyValues;
}

module.exports = {
    shallowEqual,
};
