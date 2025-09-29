const BulkTank  = require('./bulktank');
const Cow  = require('./cow');

const tank1 = new BulkTank()  // 2000
const cow1 = new Cow("Awesome cow")

console.log(tank1.GetCapacity())
tank1.addToTank(7)
tank1.getFromTank(5)
tank1.print()

console.log(cow1.GetAmount())
console.log(cow1.GetCapacity())
cow1.print()