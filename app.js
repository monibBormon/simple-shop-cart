//add or minus iphone case 
function inputNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-price');
    let caseValue = caseInput.value;
    if (isIncreasing == true) {
        caseValue = parseInt(caseValue) + 1;
    } else if (caseValue > 0) {
        caseValue = parseInt(caseValue) - 1;
    }
    caseInput.value = caseValue;
    // update case number
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseValue * price;
    calculateTotal();
};


//get input value
function getInputValue(product) {
    const productInput = document.getElementById(product + '-price');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 50;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    inputNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    inputNumber('phone', 1219, false);
});

// handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    inputNumber('case', 50, true)
});
document.getElementById('case-minus').addEventListener('click', function () {
    inputNumber('case', 50, false)
})

//update subtotal










/* //add or minus phone price
function inputMobile(isIncreasing) {
    const phonePrice = document.getElementById('phone-price');
    let phoneValue = phonePrice.value;
    if (isIncreasing == true) {
        phoneValue = parseFloat(phoneValue) + 1;
    } else if (phoneValue > 0) {
        phoneValue = parseFloat(phoneValue) - 1;
    }
    phonePrice.value = phoneValue;
    //total phone price
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneValue * 1219;
} */
