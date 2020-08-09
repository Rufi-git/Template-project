"use strict";

class Person {
    constructor(userName, userSurname, userAge, userEmail, userPassword) {
        this.userName = userName;
        this.userSurname = userSurname;
        this.userAge = userAge;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
};

function getInputValue(identifikator){
    return $(identifikator).val();

}
$(document).ready(function () {
    $("#register").on("click", function (event) {
        event.preventDefault();

        let userName = getInputValue("#userName");
        let userSurname = getInputValue("#userSurname");
        let userAge = getInputValue("#userAge");
        let userEmail =  getInputValue("#userEmail");
        let userPassword =  getInputValue("#userPassword");

        let person = new Person(userName, userSurname, userAge, userEmail, userPassword);
        let success = false;
        if ("users" in sessionStorage) {
            let allUsers = JSON.parse(sessionStorage.users);
            if ("length" in allUsers) {
                allUsers.push(person);
                sessionStorage.users = JSON.stringify(allUsers);
                success = true;
            } else {
                let ms = [];
                ms.push(allUsers);
                ms.push(person);
                sessionStorage.users = JSON.stringify(ms);
                success = true
            }
        } else {
            sessionStorage.users = JSON.stringify(person)
            success = true;
        }
        if (success) {
            alert("siz ugurla qeydiyyatdan kecdiniz!")
        }
    })
})