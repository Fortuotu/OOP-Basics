const { Person } = require("./person-class")

let person = new Person("John Doe", 30, 75, 1.8);
person.print();
console.log("BMI:", person.getBMI());

person.setWeight(-5);  // Kuvab veateate "Kaal peab olema positiivne arv!"
person.setHeight(0);   // Kuvab veateate "Pikkus peab olema positiivne arv!"
