document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodValue = getFieldValueById('food');
    const rentValue = getFieldValueById('rent');
    const clothesValue = getFieldValueById('clothes');
    const incomeValue = getFieldValueById('income');
    if (incomeValue < 0 || incomeValue == "" || isNaN(incomeValue) || foodValue < 0 || foodValue == "" || isNaN(foodValue) || rentValue < 0 || rentValue == "" || isNaN(rentValue) || clothesValue < 0 || clothesValue == "" || isNaN(clothesValue)) {
        alert("Inputs must be positive numbers, end all amount fields and do not input string numbers into fields");
        return;
    }
    else {
        const totalExpense = foodValue + rentValue + clothesValue;
        if (incomeValue < totalExpense) {
            alert('Debt cannot exceed income');
            return;
        }
        else {
            setTextById('total-expense', totalExpense);
            const balance = incomeValue - totalExpense;
            setTextById('balance', balance);
        }
        setValueById('food', '');
        setValueById('rent', '');
        setValueById('clothes', '');
    }
})
document.getElementById('btn-save').addEventListener('click', function () {
    const saveFieldValue = getFieldValueById('save');
    const incomeValue = getFieldValueById('income');
    const balance = getFieldTextById('balance');
    if (saveFieldValue > 100) {
        alert("Cannot save more than 100%");
        return;
    }
    else {
        if (saveFieldValue < 0 || saveFieldValue == "" || isNaN(saveFieldValue) || incomeValue < 0 || incomeValue == "" || isNaN(incomeValue) || balance < 0 || balance == "" || isNaN(balance)) {
            alert('Inputs must be positive numbers , end balance and income  amount fields and do not input string numbers into fields')
            return;
        }
        else {
            const savingAmount = (incomeValue * (saveFieldValue / 100)).toFixed(2);
            if (balance < savingAmount) {
                alert("Can't save more than balance.");
                return;
            }
            else {
                setTextById('saving-amount', savingAmount);
                const remainingBalance = (balance - savingAmount).toFixed(2);
                setTextById('remaining-balance', remainingBalance);
            }
        }
        setValueById('save', '');
        setValueById('income', '');
    }
})

function getFieldValueById(id) {
    const valueString = document.getElementById(id).value;
    const value = parseFloat(valueString);
    return value;
}
function getFieldTextById(id) {
    const textString = document.getElementById(id).innerText;
    const value = parseFloat(textString);
    return value;
}

function setTextById(id, value) {
    const fieldValue = document.getElementById(id);
    fieldValue.innerText = value;
}
function setValueById(id, value) {
    const fieldValue = document.getElementById(id);
    fieldValue.value = value;
}
