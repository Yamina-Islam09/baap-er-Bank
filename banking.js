//deposit tk update and add kora
document.getElementById('deposit-btn').addEventListener('click', function() {
    //new input tk
    const newDeposit = document.getElementById('deposit-input');
    //new input k number e nise
    const newDepositAmount = parseFloat(newDeposit.value);
    //old tk nise age ja chilo
    const oldDeposit = document.getElementById('deposit-amount');
    //old er inner text mane string k number e nise
    var oldDepositAmount = parseFloat(oldDeposit.innerText);

    //add tk
    const updateDeposit = newDepositAmount + oldDepositAmount;
    //number k abr string hishebe pass krse
    oldDeposit.innerText = updateDeposit;

    //balance update
    const balanceAmount = document.getElementById('balance-amount');
    const BalanceAmountNumber = parseFloat(balanceAmount.innerText);
    var newBalance = BalanceAmountNumber + newDepositAmount;
    balanceAmount.innerText = newBalance;
    newDeposit.value = '';

})

//withdraw system
document.getElementById('withdraw-btn').addEventListener('click', function() {
    //new withdraw tk
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdraw = parseFloat(withdrawInput.value);
    //old withdraw tk
    const oldWithdraw = document.getElementById('withdraw-amount');
    const oldWithdrawAmount = parseFloat(oldWithdraw.innerText);

    //add withdraw
    const totalWithdraw = newWithdraw + oldWithdrawAmount;
    oldWithdraw.innerText = totalWithdraw;
    //balance tk
    const balanceAmount = document.getElementById('balance-amount');
    const BalanceAmountNumber = parseFloat(balanceAmount.innerText);
    var newBalance = BalanceAmountNumber - newWithdraw;
    balanceAmount.innerText = newBalance;
    withdrawInput.value = '';
})