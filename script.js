function login(e) {
    e.preventDefault();
    const email = "user@gmail.com";
    const password = "user123";

    const uemail = document.getElementById("username").value;
    const upassword = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === uemail && password === upassword) {
        alert("Login Successful");
        // localStorage.setItem("email", uemail);
        // console.log("Saved '" + uemail + "' to THIS tab's local storage.");
        window.location.href = "index.html";
    } else {
        error.innerText = "Invalid email or password";
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword").querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

function toggleMenu() {
    let menu = document.getElementById("navMenu");
    let icon = document.getElementById("menuIcon");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}
