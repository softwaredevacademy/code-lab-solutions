function isPalindrome(word) {
    const lcWord = word.toLowerCase();
    return lcWord === Array.from(lcWord).reverse().join('');
}

module.exports = {
    isPalindrome,
};
