function calculateDiscountPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;
}

const originalPrice = 99000;
const discountPercentage = 33;
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage);
const tax = 19;

function calculatePriceTax(finalPrice, tax) {
    const discountTax = (finalPrice * tax) /100;
    const priceWithDiscountTax = finalPrice + discountTax;

    return priceWithDiscountTax;
}

const totalToPay = calculatePriceTax(finalPrice, tax)

console.log(`Original Price: $${originalPrice}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Promotional discount price: $${finalPrice}`);
console.log(`Tax: ${tax}%`);
console.log(`Total to pay: $${totalToPay}`);