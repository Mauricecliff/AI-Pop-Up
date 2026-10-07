function calculateTotal(price, quantity) {
    return price * quantity;
}   


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}       