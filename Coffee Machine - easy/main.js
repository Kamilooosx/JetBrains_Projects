// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let waterForOneCoffee = 200;
let milkForOneCoffee = 50;
let beansForOneCoffee = 15;

console.log(`Write how many ml of water the coffee machine has:`);
let machineWater = input();

console.log(`Write how many ml of milk the coffee machine has:`);
let machineMilk = input();

console.log(`Write how many grams of coffee beans the coffee machine has:`);
let machineBeans = input();

console.log(`Write how many cups of coffee you will need:`);
let howManyCupsYouNeed = input();
let cups = 0;

while (machineWater >= waterForOneCoffee &&
machineMilk >= milkForOneCoffee &&
machineBeans >= beansForOneCoffee){
    machineWater -= waterForOneCoffee;
    machineMilk -= milkForOneCoffee;
    machineBeans -= beansForOneCoffee;
    ++cups;
}

switch (true) {
    case cups == howManyCupsYouNeed:
        console.log("Yes, I can make that amount of coffee");
        break;
    case cups > howManyCupsYouNeed:
        console.log(`Yes, I can make that amount of coffee (and even ${cups - howManyCupsYouNeed} more than that)`);
        break;
    case cups < howManyCupsYouNeed:
        console.log(`No, I can make only ${cups} cups of coffee`);
        break;
}