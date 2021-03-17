class Animal {
    name;

    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} says meow`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} says woof`);
    }
}

module.exports = {
    Animal,
    Cat,
    Dog,
};
