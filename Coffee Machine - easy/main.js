// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
// Stage 4/6: Buy, fill, take!
// Description
// Let's simulate an actual coffee machine! What do we need for that? This coffee machine will have a limited supply of water, milk, coffee beans, and disposable cups. Also, it will calculate how much money it gets for selling coffee.
// There are several options for the coffee machine we want you to implement: first, it should sell coffee. It can make different types of coffee: espresso, latte, and cappuccino. Of course, each variety requires a different amount of supplies, however, in any case, you will need only one disposable cup for a drink. Second, the coffee machine must get replenished by a special worker. Third, another special worker should be able to take out money from the coffee machine.

const input = require('sync-input');
let machineWater = 400;
let machineMilk = 540;
let machineBeans = 120;
let disposableCups = 9;
let money = 550;


function machineStats() {
    console.log(`The coffee machine has:
${machineWater} ml of water
${machineMilk} ml of milk
${machineBeans} g of coffee beans
${disposableCups} disposable cups
${money} of money`);
};


class Coffee {
    constructor(water, milk, coffeeBeans, cost) {
        this.water = water;
        this.milk = milk;
        this.coffeeBeans = coffeeBeans;
        this.cost = cost;
    };

    countMachine() {
        if (machineWater >= this.water &&
            machineMilk >= this.milk &&
            machineBeans >= this.coffeeBeans &&
            disposableCups > 0) {
            machineWater -= this.water;
            machineMilk -= this.milk;
            machineBeans -= this.coffeeBeans;
            --disposableCups;
            money += this.cost;
        }
    }

};
const espresso = new Coffee(250, 0, 16, 4);
const latte = new Coffee(350, 75, 20, 7);
const cappucino = new Coffee(200, 100, 12, 6);


machineStats();
console.log(`Write action (buy, fill, take):`);
let action = input();

switch (true) {
    case action == "buy": {
        console.log(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:`);
        let whatBuy = input();
        switch (true) {
            case whatBuy == 1: {
                espresso.countMachine();
                machineStats();
                break;
            }
            case whatBuy == 2: {
                latte.countMachine();
                machineStats();
                break;
            }
            case whatBuy == 3: {
                cappucino.countMachine();
                machineStats();
                break;
            }
        }
    }
    case action == "fill": {
        console.log(`Write how many ml of water you want to add:`);
        machineWater += parseInt(input());
        console.log(`Write how many ml of milk you want to add:`);
        machineMilk += parseInt(input());
        console.log(`Write how many ml of coffee beans you want to add:`);
        machineBeans += parseInt(input());
        console.log(`Write how many disposable cups you want to add:`);
        disposableCups += parseInt(input());
        machineStats();
        break;
    }
    case action == "take": {
        console.log(`I gave you $${money}`);
        money = 0;
        machineStats();
        break;
    }
    break;
};

