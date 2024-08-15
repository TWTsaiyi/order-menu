function generateReceipt() {
    const instrument1 = document.getElementById("instrument1").value;
    const quantity1 = parseInt(document.getElementById("quantity1").value);
    const price1 = parseFloat(document.getElementById("price1").value);

    let total = 0;
    let receiptText = "<h2>收據</h2><ul>";

    if (quantity1 > 0 && price1 >= 0) {
        const itemTotal = quantity1 * price1;
        receiptText += `<li>儀器: ${instrument1}, 數量: ${quantity1}, 單價: $${price1.toFixed(2)}, 小計: $${itemTotal.toFixed(2)}</li>`;
        total += itemTotal;
    }

    receiptText += `</ul><h3>總計: $${total.toFixed(2)}</h3>`;

    document.getElementById("receipt").innerHTML = receiptText;
}

function printReceipt() {
    const receiptContent = document.getElementById("receipt").innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = receiptContent;
    window.print();
    document.body.innerHTML = originalContent;
}
