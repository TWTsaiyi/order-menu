function generateReceipt() {
    const dish1Qty = document.getElementById("dish1-qty").value;
    const dish2Qty = document.getElementById("dish2-qty").value;

    const dish1Price = 10;
    const dish2Price = 8;

    let total = 0;
    let receiptText = "<h2>收據</h2><ul>";

    if (dish1Qty > 0) {
        const dish1Total = dish1Qty * dish1Price;
        receiptText += `<li>炒飯 (${dish1Qty} 份): $${dish1Total}</li>`;
        total += dish1Total;
    }

    if (dish2Qty > 0) {
        const dish2Total = dish2Qty * dish2Price;
        receiptText += `<li>麵條 (${dish2Qty} 份): $${dish2Total}</li>`;
        total += dish2Total;
    }

    receiptText += `</ul><h3>總計: $${total}</h3>`;

    document.getElementById("receipt").innerHTML = receiptText;
}

function printReceipt() {
    const receiptContent = document.getElementById("receipt").innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = receiptContent;
    window.print();
    document.body.innerHTML = originalContent;
}
