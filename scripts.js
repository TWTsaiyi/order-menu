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
    // 隱藏其他元素
    document.getElementById("order-form").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector("button[onclick='generateReceipt()']").style.display = "none";
    document.querySelector("button[onclick='printReceipt()']").style.display = "none";

    // 打印收據
    window.print();

    // 打印後顯示其他元素
    document.getElementById("order-form").style.display = "block";
    document.querySelector("h1").style.display = "block";
    document.querySelector("button[onclick='generateReceipt()']").style.display = "inline-block";
    document.querySelector("button[onclick='printReceipt()']").style.display = "inline-block";
}
