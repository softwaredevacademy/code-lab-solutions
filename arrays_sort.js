const sort = (array) => {
    // Based on selection sort
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min !== i) {
            const tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }

    return array;
};


module.exports = {
    sort,
};
