const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const loginButton = loginForm.querySelector("button");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    loginError.style.display = "none";

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
        loginError.innerHTML = "Please fill all fields.";
        loginError.style.display = "block";
        return;
    }

    loginButton.innerHTML = "Logging in...";
    loginButton.disabled = true;

    setTimeout(() => {

        // Student
        if (email === "student@gmail.com" && password === "student1234") {
            window.location.href = "../adminhtml/studentdashboard.html";
        }

        // Host
        else if (email === "host@gmail.com" && password === "host1234") {
            window.location.href = "";
        }

        // Admin
        else if (email === "admin@gmail.com" && password === "admin1234") {
            window.location.href = "../adminhtml/admindashboard.html";
        }

        // Wrong Login
        else {
            loginButton.innerHTML = "Login";
            loginButton.disabled = false;

            loginError.innerHTML = "Invalid Email or Password.";
            loginError.style.display = "block";
        }

    }, 1000);
});

// Show / Hide Password
const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {
    togglePassword.addEventListener("click", () => {

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordInput.type = "password";
            togglePassword.classList.replace("fa-eye-slash", "fa-eye");
        }

    });
}