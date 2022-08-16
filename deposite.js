document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');

    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString)

    depositeField.value = '';

    if (isNaN(newDepositeAmount)) {
        alert('use number')
        return
    }

    const depositeTotalElement = document.getElementById('deposite-total');

    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const currentDepositeTotal = newDepositeAmount + previousDepositeTotal;
    depositeTotalElement.innerText = currentDepositeTotal;

    const balenceTotal = document.getElementById('balence-total');
    const previousBalenceTotalString = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(previousBalenceTotalString);
    const currentBalenceTotal = currentDepositeTotal + previousBalenceTotal;
    balenceTotal.innerText = currentBalenceTotal;
})