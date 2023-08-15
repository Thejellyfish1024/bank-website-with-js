document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawField = document.getElementById('new-withdraw');
    const newWithdraw = newWithdrawField.value;
     // 
     newWithdrawField.value = '';
    //  validation
    if (isNaN(parseFloat(newWithdraw))){
        alert('Please give a valid number');
        return;
    }
    else if(parseFloat(newWithdraw) < 0){
        alert('Amount can not be negative')
        return;
    }
    // 
    const totalWithdrawField = document.getElementById('total-withdraw');
    const totalWithdraw = totalWithdrawField.innerText;
    // 
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalance = totalBalanceField.innerText;
    //
    // validation - 2
    if (parseFloat(newWithdraw) > parseFloat(totalBalance)){
        alert("Don't have enough balance")
        return;
    }
    // 
    totalWithdrawField.innerText = parseFloat(totalWithdraw) + parseFloat (newWithdraw);
    //  
    totalBalanceField.innerText = parseFloat(totalBalance) - parseFloat(newWithdraw);
})