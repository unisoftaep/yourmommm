document.addEventListener("DOMContentLoaded", function () {
    const loginPopup = document.querySelector(".wrapper");
    const loginButton = document.querySelector(".btnlogin-popup");
    const closeButton = document.querySelector(".icon-close");
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link");
    const loginForm = document.querySelector(".form-box.login");
    const registerForm = document.querySelector(".form-box.register");

    loginButton.addEventListener("click", function () {
        loginPopup.classList.add("active-popup");
    });

    closeButton.addEventListener("click", function () {
        loginPopup.classList.remove("active-popup");
    });

    registerLink.addEventListener("click", function () {
        loginForm.style.transform = "translateX(-400px)";
        registerForm.style.transform = "translateX(0)";
    });

    loginLink.addEventListener("click", function () {
        loginForm.style.transform = "translateX(0)";
        registerForm.style.transform = "translateX(400px)";
    });
});
