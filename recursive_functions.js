const factorial = (n) => ((n === 0 || n === 1) ? 1 : (n * factorial(n - 1)));

module.exports = {
    factorial,
};
