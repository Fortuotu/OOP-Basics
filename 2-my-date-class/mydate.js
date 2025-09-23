
class MyDate {
    #day;
    #month;
    #year;

    constructor(day, month, year) {
        this.#day = day;
        this.#month = month;
        this.#year = year;

        this.isValid();
    }

    isValid() {
        if (!Number.isInteger(this.#day) || !Number.isInteger(this.#month) || !Number.isInteger(this.#year)) {
            console.log("Viga: päev, kuu ja aasta peavad olema täisarvud.");
            return false;
        }

        if (this.#month < 1 || this.#month > 12) {
            console.log("Viga: kuu peab olema vahemikus 1 kuni 12.");
            return false;
        }

        const daysInMonth = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        };

        const maxDay = daysInMonth[this.#month];
        if (this.#day < 1 || this.#day > maxDay) {
            console.log(`Viga: kuu ${this.#month} sisaldab maksimaalselt ${maxDay} päeva.`);
            return false;
        }

        return true;
    }

    printDay() {
        return `${this.#day}.${this.#month}.${this.#year}`;
    }

    earlier(compared) {
        if (!(compared instanceof MyDate)) {
            console.log("Viga: võrreldav objekt ei ole MyDate tüüp.");
            return false;
        }

        if (this.#year < compared.#year) return true;
        if (this.#year === compared.#year && this.#month < compared.#month) return true;
        if (this.#year === compared.#year && this.#month === compared.#month && this.#day < compared.#day) return true;
        return false;
    }
}

module.exports = { MyDate };
