"use strict";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showPass").addEventListener("click", function () {
        let password = document.getElementById("password");
        if (password.type == "text") {
            password.type = "password";
        } else {
            password.type = "text"
        }
    });
});