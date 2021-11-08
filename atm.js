const PromptSync = require('prompt-sync')
const account = require('./account')
const index = require('./index')


function getBalance(){
    account.balance
    console.log(account.balance)
}

function withdraw(){
    const amount = prompt('Enter amount to withdraw')//prompt user for withdraw amount
    if (amount <= account.balance){
        account.balance = account.balance - amount
        console.log(account.balance)
    }
    else{
        return index.mainMenu
    }
}

function deposit(){
    const amountDeposit = prompt('Enter amount to Deposit')//prompt user for withdraw amount
    if (amount >= account.balance){
        account.balance = account.balance + amountDeposit
        console.log(account.balance)
    }
    else{
        return index.mainMenu
    }
}

function validatePin(){ for(let i = 0; i < pin.length; i++){
    const answer = promptFor("Is " + input[i].pin +  " your correct pin? Type 'yes' or 'no' below.", yesNo);
    if(answer == "yes"){
      mainMenu;
      break;
      console.log("this  is where we will validate pin")
      account.pin
    }else{
      alert("Wrong Pin");
    }
  }
}
    

  
//exports
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;