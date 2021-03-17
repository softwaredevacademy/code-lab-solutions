class Queue {
    list = [];

    enqueue(item) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}

module.exports = {
    Queue,
};
