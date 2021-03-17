function hammingDistance(str1, str2) {
    return Array.from(str1).reduce((count, x, i) => (x === str2[i] ? count : count + 1), 0);
}

module.exports = {
    hammingDistance,
};
