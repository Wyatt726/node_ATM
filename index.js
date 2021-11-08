const atm = require('./atm')
const prompt = require('prompt-sync')();

atm.validatePin()
  

const mainMenu = promptFor("Enter 1 for Balance, Enter 2 for Withdraw, Enter 3, Enter 4 restart or 5 to quit'", autoValid);

switch(mainMenu){
  case "1":
  account.balance;
  break;
  case "2":
  atm.withdraw;
  break;
  case "3":
  atm.deposit
  break;
  case "4":
  app(people); // restart
  break;
  case "5":
  return; // stop execution
  default:
  return mainMenu; // ask again
}


module.exports.mainMenu = mainMenu;
