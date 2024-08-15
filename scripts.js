function generateReceipt() {
    console.log("Generate Receipt function triggered.");

    const instrumentElement = document.getElementById("instrument1");
    const quantityElement = document.getElementById("quantity1");
    const priceElement = document.getElementById("price1");

    // 檢查是否有任何元素未找到
    if (!instrumentElement || !quantityElement || !priceElement) {
        console.error("One or more elements are missing in the DOM.");
        return;
    }

    const instrument1 = instrumentElement.value;
    const quantity1 = quantityElement.value;
    const price1 = priceElement.value;

    console.log("Selected instrument:", instrument1);
    console.log("Selected quantity:", quantity1);
    console.log("Entered price:", price1);

    if (quantity1 > 0 && price1 > 0) {
        const itemTotal = quantity1 * price1;
        console.log("Item total:", itemTotal);

        let receiptText = "<h2>收據</h2><ul>";
        receiptText += `<li>${instrument1} (${quantity1} 份): $${itemTotal}</li>`;
        receiptText += `</ul><h3>總計: $${itemTotal}</h3>`;

        document.getElementById("receipt").innerHTML = receiptText;
        console.log("Receipt generated.");
    } else {
        console.log("Invalid quantity or price.");
    }
}

function printReceipt() {
    const receiptContent = document.getElementById("receipt").innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = receiptContent;
    window.print();
    document.body.innerHTML = originalContent;
}
