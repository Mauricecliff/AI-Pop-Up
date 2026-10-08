
const form = document.getElementById("registrationForm");

if (!form) {
    throw new Error("Registration form not found.");
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    if (!nameInput || !emailInput || !phoneInput || !passwordInput || !confirmPasswordInput) {
        return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const successMessage = document.getElementById("successMessage");

    if (nameError) nameError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (phoneError) phoneError.textContent = "";
    if (passwordError) passwordError.textContent = "";
    if (confirmPasswordError) confirmPasswordError.textContent = "";
    if (successMessage) successMessage.textContent = "";

    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;

    if (name === "") {
        if (nameError) nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (email === "") {
        if (emailError) emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        if (emailError) emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    if (phone === "") {
        if (phoneError) phoneError.textContent = "Please enter your phone number.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        if (phoneError) phoneError.textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    if (password === "") {
        if (passwordError) passwordError.textContent = "Please enter a password.";
        isValid = false;
    } else if (password.length < 6) {
        if (passwordError) passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (confirmPassword === "") {
        if (confirmPasswordError) confirmPasswordError.textContent = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        if (confirmPasswordError) confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        if (successMessage) {
            successMessage.textContent = "Account created successfully!";
        }

        form.reset();
    }
});

