
class Person {
    #name = null
    #age = 0;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    setName(name) {
        this.#name = name;
    }
    
    getName() {
        return this.#name;
    }

    setAge(age) {
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }
}

module.exports = { Person };
