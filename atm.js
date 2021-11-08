let index = require('./index');
let account = require('./account');
let prompt = require("prompt-sync")();



function getBalance(){
    console.log(account.balance)
}

function withdraw(){
    withdrawAmount = (prompt("please enter the withdraw amount"))
    if (withdrawAmount <= account.balance){
       account.balance = account.balance - withdrawAmount
       console.log(`You withdrew ${withdrawAmount} Your new balance is ${account.balance}`)

    }else{
        console.log("Please enter a correct amount")
        withdraw()
    }
}

function deposit(){
    depositAmount = (prompt("please eneter the deposit amount"))
    account.balance = account.balance + depositAmount
  console.log(`you have despoitied ${depositAmount} Your new balance is ${account.balance}`)
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