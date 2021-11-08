const atm = require("./atm");
const prompt = require('prompt-sync')();

atm.validatePin()
mainMenu()

function mainMenu(){
    let userInput = parseInt(prompt("Enter 1 for Balance, Enter 2 for Withdraw, Enter 3 for Deposit, Enter 4 restart or 5 to quit'"))
switch(userInput){
    case 1:
    atm.getBalance()
    mainMenu()
    case 2:
    atm.withdraw()
    mainMenu();
    case 3:
    atm.deposit()
    mainMenu()
    case 4:
    mainMenu()// restart
    case 5:
    process.exit() // stop execution
    default:
    
}
}

module.exports.mainMenu = mainMenu;
