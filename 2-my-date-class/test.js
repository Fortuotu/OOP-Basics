const { MyDate } = require('./mydate');

const date1 = new MyDate(1, 1, 2020);
console.log("date1:", date1.printDay());

const date2 = new MyDate(15, 6, 2019);
console.log("date2:", date2.printDay());

const date3 = new MyDate(31, 2, 2020);

const date4 = new MyDate(28, 2, 2020);
console.log("date4:", date4.printDay());

console.log("Is date2 earlier than date1?", date2.earlier(date1));
console.log("Is date1 earlier than date2?", date1.earlier(date2));
console.log("Is date1 earlier than date4?", date1.earlier(date4));
