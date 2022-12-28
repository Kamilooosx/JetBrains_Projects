// Use "input()" to input a line from the user
// Description
// Just one action is not so interesting, is it? Let's improve the program so it can do multiple actions, one after another. It should repeatedly ask a user what they want to do. If the user types "buy", "fill" or "take", then the program should do exactly the same thing it did in the previous step. However, if the user wants to switch off the coffee machine, they should type "exit". The program should terminate on this command. Also, when the user types "remaining", the program should output all the resources that the coffee machine has. This means that you shouldn't show the remaining stock levels at the beginning/end of the program.
const input = require('sync-input')
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
${money} of money`)
}


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
            console.log(`I have enough resources, making you a coffee!`)
            menu();
        } else {
            switch (true) {
                case machineWater < this.water:
                    console.log(`Sorry, not enough water!`);
                    break;
                case machineMilk >= this.milk:
                    console.log(`Sorry, not enough milk!`);
                    break;
                case machineBeans >= this.coffeeBeans:
                    console.log(`Sorry, not enough coffee beans!`);
                    break;
                case disposableCups <= 0:
                    console.log(`Sorry, not enough disposable cups!`);
                    break;
            }
            menu();
        }
    }

}
const espresso = new Coffee(250, 0, 16, 4);
const latte = new Coffee(350, 75, 20, 7);
const cappucino = new Coffee(200, 100, 12, 6);


function menu() {
    console.log(`Write action (buy, fill, take, remaining, exit):`);

    let action = input();
    switch (true) {

        case action === "buy": {
            console.log(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:`);
            let whatBuy = parseInt(input());
            switch (true) {
                case whatBuy === 1: {
                    espresso.countMachine();
                    break;
                }
                case whatBuy === 2: {
                    latte.countMachine();
                    break;
                }
                case whatBuy === 3: {
                    cappucino.countMachine();
                    break;
                }
            }
            menu()
            break;
        }

        case action === "fill": {
            console.log(`Write how many ml of water you want to add:`);
            machineWater += parseInt(input());
            console.log(`Write how many ml of milk you want to add:`);
            machineMilk += parseInt(input());
            console.log(`Write how many ml of coffee beans you want to add:`);
            machineBeans += parseInt(input());
            console.log(`Write how many disposable cups you want to add:`);
            disposableCups += parseInt(input());
            menu()
            break;
        }
        case action === "take": {
            console.log(`I gave you $${money}`);
            money = 0;
            menu();
            break;
        }
        case action === "remaining": {
            machineStats();
            menu();
            break;
        }
        case action === "exit": {
            return;
        }

    }
}

menu();