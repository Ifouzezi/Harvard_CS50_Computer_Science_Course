let price_field = document.querySelector('.price')
let promo_field = document.querySelector('.promo')
let calc_btn = document.querySelector('.btn')
let result_field = document.querySelector('.result')

function check_promo(price, promo) {
// Here we calculate and return the total price
    const discountCode = 'noborders';
    const minAmount = 10000;
    const discount = 0.10;

    if (promo === discountCode && price >= minAmount) {
        return price - (price * discount); // Apply 10% discount
    }

    return price; 
}

calc_btn.addEventListener('click', function() {
    let price = +price_field.value;
    let promo = promo_field.value;

    // Call the check_promo function to calculate the total price
    let total = check_promo(price, promo);
    
    // Display the result in the result_field
    result_field.textContent = `${total} coins`;
});
