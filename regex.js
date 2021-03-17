function isEmail(str) {
    return !!str.match(/^.+@.+\.\w+$/);
}

module.exports = {
    isEmail,
};
