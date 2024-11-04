document.getElementById("tipForm").addEventListener("input", calculateTip);

function calculateTip() {
    const billTotal = parseFloat(document.getElementById("billTotal").value);
    const tipPercentage = parseInt(document.getElementById("tipPercentage").value);
    const tipPercentageLabel = document.getElementById("tipPercentageLabel");
    const tipAmountField = document.getElementById("tipAmount");
    const totalWithTipField = document.getElementById("totalWithTip");
    const currency = document.getElementById("currency").value;
    const errorField = document.getElementById("error");

    tipPercentageLabel.textContent = tipPercentage;
    errorField.textContent = "";

    if (isNaN(billTotal) || billTotal <= 0) {
        errorField.textContent = "Please enter a valid positive number for the bill total.";
        tipAmountField.value = "";
        totalWithTipField.value = "";
        return;
    }

    let conversionRate = 1;
    if (currency === "INR") conversionRate = 84.07;
    if (currency === "JPY") conversionRate = 149.34;

    const tipAmount = (billTotal * (tipPercentage / 100)) * conversionRate;
    const totalWithTip = (billTotal + tipAmount / conversionRate) * conversionRate;

    tipAmountField.value = `${(tipAmount).toFixed(2)} ${currency}`;
    totalWithTipField.value = `${(totalWithTip).toFixed(2)} ${currency}`;
}
