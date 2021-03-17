function isPrime(number) {
    const sieve = Array(number + 1).fill(true);
    const upperLimit = Math.sqrt(number);

    for (let i = 2; i <= upperLimit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= number; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve[number];
}

module.exports = {
    isPrime,
};
