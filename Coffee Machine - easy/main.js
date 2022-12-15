// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log(`Write how many cups of coffee you will need:`);

let howManyCups = input();
let waterForOneCoffee = 200;
let milkForOneCoffee = 50;
let beansForOneCoffee = 15;

console.log(`For ${howManyCups} cups of coffee you will need:
${waterForOneCoffee * howManyCups} ml of water
${milkForOneCoffee * howManyCups} ml of milk
${beansForOneCoffee * howManyCups} g of coffee beans`);
