function repeatString(string, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += string;
    }
    return result;
}

module.exports = {
    repeatString,
};
