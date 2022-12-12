function getMoneyFromAtm(moneyonaccount = 1000) {
    let withdrawMoney = parseInt(prompt('Enter amount you would like to withdraw'));
    let moneyleft = 1000 - withdrawMoney;
    if(withdrawMoney <= moneyonaccount) {
    console.log('You have withdrawn:',withdrawMoney,'$,', "Money left on your account:", moneyleft,'$');
    }
    else if(withdrawMoney > 1000) {
        console.log('Not enough money')
    }
}

getMoneyFromAtm();

