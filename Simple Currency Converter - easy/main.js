const input = require('sync-input');
const currencies = {
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
    USD: 1
}

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

let flag = false;
while(flag == false) {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    let whatToDo = input();
    switch (whatToDo) {
        // case when user pick "Convert currencies" - 1
        case "1":

            function convertCurrents(whatToDo) {
            console.log('What do you want to convert?')

            let currencyFrom = input(`From: `).toUpperCase();
            if (!(currencyFrom in currencies)) {
                return console.log("Unknown currency");
                // flag = true;
                convertCurrents();
            }
//
            let currencyTo = input(`To: `).toUpperCase();
            if (!(currencyTo in currencies)) {
                return console.log("Unknown currency");
                convertCurrents();;
            }
// Type amount of currency.
            console.log(`Type the amount of currency you wish to convert`);
            let amount = input(`Amount: `).toUpperCase();
            if (amount < 1) {
                return console.log("The amount cannot be less than 1");
            } else if (isNaN(amount)) {
                return console.log("The amount has to be a number");
            }
// calculations of the given data.
            console.log("Result: " + amount + " " + currencyFrom + " equals " + (((amount / currencies[currencyFrom] * (currencies[currencyTo]))).toFixed(4) + " " + currencyTo));

        };
            convertCurrents();
            break;
            // case when user pick "exit". - 2.
        case "2":
            console.log('Have a nice day!');
            flag = true;
            break;

            // case when user type wrong input.
        default:
            console.log('Unknown input');
    };
};
