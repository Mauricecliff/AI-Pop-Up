
// Get the form
const form = document.getElementById("registrationForm");

// Listen for form submission
form.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Get error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Success message
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";

    // Track whether the form is valid
    let isValid = true;


    // =========================
    // NAME VALIDATION
    // =========================

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }


    // =========================
    // EMAIL VALIDATION
    // =========================

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;

    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }


    // =========================
    // PHONE VALIDATION
    // =========================

    const phonePattern = /^[0-9]{10,15}$/;

    if (phone === "") {
        phoneError.textContent = "Please enter your phone number.";
        isValid = false;

    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Please enter a valid phone number.";
        isValid = false;
    }


    // =========================
    // PASSWORD VALIDATION
    // =========================

    if (password === "") {
        passwordError.textContent = "Please enter a password.";
        isValid = false;

    } else if (password.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters.";
        isValid = false;
    }


    // =========================
    // CONFIRM PASSWORD
    // =========================

    if (confirmPassword === "") {
        confirmPasswordError.textContent =
            "Please confirm your password.";
        isValid = false;

    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent =
            "Passwords do not match.";
        isValid = false;
    }


    // =========================
    // FINAL RESULT
    // =========================

    if (isValid) {

        successMessage.textContent =
            "Account created successfully!";

        // Clear form
        form.reset();
    }

});

