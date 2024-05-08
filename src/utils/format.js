export function formatMoney(amount) {
    let formattedAmount = Number(amount).toFixed(2);

    formattedAmount = formattedAmount.toString();

    let parts = formattedAmount.split(".");
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? parts[1] : "";

    while (decimalPart.length < 2) {
        decimalPart += "0";
    }

    formattedAmount = integerPart + "." + decimalPart;

    return formattedAmount;
}
