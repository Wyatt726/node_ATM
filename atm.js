let index = require('./index');
let account = require('./account');
let prompt = require("prompt-sync")();



function getBalance(){
    console.log(account.balance)
}

function withdraw(){
    withdrawAmount = parseInt(prompt("please enter the withdraw amount"))
    if(isNaN(withdrawAmount)){
        console.log("Enter a Number")
        withdraw()
    }
    else {
        withdrawAmount <= account.balance;{
        account.balance = account.balance - withdrawAmount
        console.log(`You withdrew ${withdrawAmount} Your new balance is ${account.balance}`)
    }
}
}

function deposit(){
    depositAmount = parseInt(prompt("please eneter the deposit amount"));
    if(isNaN(depositAmount)){
        console.log("Enter a Number")
        deposit()
    }
    else{
    account.balance = account.balance + depositAmount
    console.log(`you have despoitied ${depositAmount} Your new balance is ${account.balance}`)
    }
}

function validatePin(){
    let userPin = parseInt(prompt('Enter your pin'))
    if(userPin == account.pin){
      console.log("You Entered The Correct Pin")
    }
    else {
      console.log('Incorrect pin. Please try again')
      validatePin()
    }
  }

    

  
//exports
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;