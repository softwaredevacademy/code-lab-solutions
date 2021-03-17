function levenshteinDistance(str1, str2) {
    if (str1.length === 0) return str2.length;
    if (str2.length === 0) return str1.length;

    return Math.min(
        levenshteinDistance(str1.substr(1), str2) + 1,
        levenshteinDistance(str2.substr(1), str1) + 1,
        levenshteinDistance(str1.substr(1), str2.substr(1)) + (str1[0] !== str2[0] ? 1 : 0),
    );
}

module.exports = {
    levenshteinDistance,
};
