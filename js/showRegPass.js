"use strict";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showPassword").addEventListener("click", function () {
        let password = document.getElementById("userPassword");
        if (password.type == "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    });
});