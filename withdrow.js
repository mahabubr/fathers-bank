document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldString);

    withdrawField.value = '';

    if (isNaN(newWithdrawField)) {
        alert('use number')
        return
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)

    const balenceTotalElement = document.getElementById('balence-total');
    const previousBalenceTotalString = balenceTotalElement.innerText;
    const previousBalenceTotal = parseFloat(previousBalenceTotalString);

    if (newWithdrawField > previousBalenceTotal) {
        alert('not have enough money')
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawField;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalenceTotal = previousBalenceTotal - newWithdrawField;
    balenceTotalElement.innerText = newBalenceTotal;

})