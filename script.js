document.getElementById("signup-form").addEventListener("submit", function(event) {
    let isValid = true;

    // Name validation
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Email validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Password validation
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (password.value.length < 6) {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
