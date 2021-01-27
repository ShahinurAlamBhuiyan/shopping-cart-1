// plusBtn1 event handler...........

const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function () {
    const inputValue = document.getElementById("inputValue").value;
    const inputValueNum = parseFloat(inputValue);
    const totalInput = inputValueNum + 1;
    document.getElementById("inputValue").value = totalInput;

    const spanPrice = document.getElementById("spanPrice").innerText;
    const spanPriceNum = parseFloat(spanPrice);
    const perPrice = 1219;
    const totalPrice = perPrice * totalInput;
    document.getElementById("spanPrice").innerText = totalPrice;

    // subtotal event handler...
    const subtotalPrice = document.getElementById("subtotalPrice").innerText;
    const subtotalPriceNum = parseFloat(subtotalPrice);
    const subtotalPriceTotal = subtotalPriceNum + perPrice;
    document.getElementById("subtotalPrice").innerText = subtotalPriceTotal;

    // totalAmount event handler...
    const totalAmount = document.getElementById("totalAmount").innerText;
    const totalAmountNum = parseFloat(totalAmount);
    const totalAmountTotal = totalAmountNum + perPrice;
    document.getElementById("totalAmount").innerText = totalAmountTotal;
})

// minusBtn1 event handler.................

const minusBtn = document.getElementById("minusBtn").addEventListener("click", function () {
    const inputValue = document.getElementById("inputValue").value;
    const inputValueNum = parseFloat(inputValue);
    const totalInput = inputValueNum - 1;
    document.getElementById("inputValue").value = totalInput;

    const spanPrice = document.getElementById("spanPrice").innerText;
    const spanPriceNum = parseFloat(spanPrice);
    const perPrice = 1219;
    const totalPrice = spanPriceNum - perPrice;
    document.getElementById("spanPrice").innerText = totalPrice;

    // subtotal event handler...
    const subtotalPrice = document.getElementById("subtotalPrice").innerText;
    const subtotalPriceNum = parseFloat(subtotalPrice);
    const subtotalPriceTotal = subtotalPriceNum - perPrice;
    document.getElementById("subtotalPrice").innerText = subtotalPriceTotal;

    // totalAmount event handler...
    const totalAmount = document.getElementById("totalAmount").innerText
    const totalAmountNum = parseFloat(totalAmount);
    const totalAmountTotal = totalAmountNum - perPrice;
    document.getElementById("totalAmount").innerText = totalAmountTotal;
})


// plusBtn2 event handler.............

const plusBtn2 = document.getElementById("plusBtn2").addEventListener("click", function () {
    const inputValue2 = document.getElementById("inputValue2").value;
    const inputValue2Num = parseFloat(inputValue2);
    totalInput = inputValue2Num + 1;
    document.getElementById("inputValue2").value = totalInput;

    const spanPrice2 = document.getElementById("spanPrice2").innerText;
    const spanPrice2Num = parseFloat(spanPrice2);
    const perPrice2 = 59;
    const totalPrice2 = totalInput * perPrice2;
    document.getElementById("spanPrice2").innerText = totalPrice2;

    // subtotal event handler...
    const subtotalPrice = document.getElementById("subtotalPrice").innerText
    const subtotalPriceNum = parseFloat(subtotalPrice);
    const subtotalPriceTotal = subtotalPriceNum + perPrice2;
    document.getElementById("subtotalPrice").innerText = subtotalPriceTotal;

    // totalAmount event handler...
    const totalAmount = document.getElementById("totalAmount").innerText
    const totalAmountNum = parseFloat(totalAmount);
    const totalAmountTotal = totalAmountNum + perPrice2;
    document.getElementById("totalAmount").innerText = totalAmountTotal;
})

// minusBtn2 event handler.....................

const minusBtn2 = document.getElementById("minusBtn2").addEventListener("click", function () {
    const inputValue2 = document.getElementById("inputValue2").value;
    const inputValue2Num = parseFloat(inputValue2);
    const totalInput2 = inputValue2Num - 1;
    document.getElementById("inputValue2").value = totalInput2;

    const spanPrice2 = document.getElementById("spanPrice2").innerText;
    const spanPrice2Num = parseFloat(spanPrice2);
    const perPrice2 = 59;
    const totalPrice2 = spanPrice2Num - perPrice2;
    document.getElementById("spanPrice2").innerText = totalPrice2;

    // subtotal event handler...
    const subtotalPrice = document.getElementById("subtotalPrice").innerText
    const subtotalPriceNum = parseFloat(subtotalPrice);
    const subtotalPriceTotal = subtotalPriceNum - perPrice2;
    document.getElementById("subtotalPrice").innerText = subtotalPriceTotal;

    // totalAmount event handler...
    const totalAmount = document.getElementById("totalAmount").innerText
    const totalAmountNum = parseFloat(totalAmount);
    const totalAmountTotal = totalAmountNum - perPrice2;
    document.getElementById("totalAmount").innerText = totalAmountTotal;
})
 
// check out area event handler...
const checkOut = document.getElementById("checkOut").addEventListener("click", function () {
    alert("Thank you for buying with us.")
})



