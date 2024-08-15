function generateReceipt() {
    console.log("Generate Receipt function triggered.");

    const instrument1 = document.getElementById("instrument1").value;
    console.log("Selected instrument:", instrument1);

    const quantity1 = document.getElementById("quantity1").value;
    console.log("Selected quantity:", quantity1);

    const price1 = document.getElementById("price1").value;
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
