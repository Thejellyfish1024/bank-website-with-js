document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositFeild = document.getElementById('new-deposit');
    const newDeposit = newDepositFeild.value;
    // 
    newDepositFeild.value = '';
    //  validation
    if (isNaN(parseFloat(newDeposit))){
        alert('Please give a valid number');
        return;
    }
    else if(parseFloat(newDeposit) < 0){
        alert('Amount can not be negative')
        return;
    }
    // 
    const totalDepositField = document.getElementById('total-deposit');
    const totalDeposit = totalDepositField.innerText;
    // 
    totalDepositField.innerText = parseFloat(totalDeposit) + parseFloat (newDeposit);
    // 
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalance = totalBalanceField.innerText;
    // 
    totalBalanceField.innerText = parseFloat(totalBalance) + parseFloat(newDeposit);
})