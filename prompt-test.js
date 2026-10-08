function calculateTotal(price, quantity) {
    return price * quantity;
}   


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}       



// function rotateArray(arr, k) {
//     const n = arr.length;
//     k = k % n;      