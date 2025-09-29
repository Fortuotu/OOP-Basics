

class Cow {
    #capacity = 2000
    #amount = 0
    #name = ""
    
    constructor(name) {
        this.#name = name
        this.#amount = 0
        this.#capacity = 2000
    }
    GetCapacity() {
        return Math.ceil(this.#capacity * 10) / 10
    }
    GetAmount() {
        return Math.ceil(this.#amount * 10) / 10
    }
    GetName(){
        return this.#name
    }
    print() {
        console.log("Name: " + this.#name)
        console.log("Capacity: " + this.#capacity)
        console.log("Amount: " + this.#amount)
    }
    milk() {
        this.#amount -= 10;

        if (this.#amount < 0) {
            this.#amount = 0
        }
    }
    liveHour() {
        this.#amount += 50

        if (this.#amount > this.#capacity) {
            this.#amount = this.#capacity;
        }
    }
}

module.exports = Cow;