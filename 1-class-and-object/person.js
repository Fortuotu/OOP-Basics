class Person {
    #name = null;
    #age = 0;
    #weight = 0;
    #height = 0;

    constructor(name, age, weight, height) {
        this.#name = name;
        this.#age = age;
        this.setWeight(weight);
        this.setHeight(height);
    }

    print() {
        console.log(`Name: ${this.#name}, Age: ${this.#age}`);
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

    setWeight(weight) {
        if (weight <= 0) {
            console.log("Kaal peab olema positiivne arv!");
        } else {
            this.#weight = weight;
        }
    }

    getWeight() {
        return this.#weight;
    }

    setHeight(height) {
        if (height <= 0) {
            console.log("Pikkus peab olema positiivne arv!");
        } else {
            this.#height = height;
        }
    }

    getHeight() {
        return this.#height;
    }

    getBMI() {
        if (this.#weight > 0 && this.#height > 0) {
            let bmi = this.#weight / (this.#height * this.#height);
            return Number(bmi.toFixed(2));
        } else {
            console.log("Kehamassiindeksi arvutamiseks peab olema määratud korrektne kaal ja pikkus.");
            return null;
        }
    }
}

module.exports = { Person };
