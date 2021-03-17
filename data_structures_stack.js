class Stack {
    list = [];

    push(item) {
        this.list.unshift(item);
    }

    pop() {
        return this.list.shift();
    }
}

module.exports = {
    Stack,
};
