class Person {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
function getInputValue(identifikator) {
    return document.getElementById(identifikator).value;
}
function findUser(inArray,checkedUser){
    let found = false;
    for (let user of inArray) {
        if (user.userEmail == checkedUser.email && user.userPassword == checkedUser.password) {
            found = true;
            let aboutUser = {
                userName: user.userName,
                userEmail: user.userEmail,
                userSurname: user.userSurname,
                userAge: user.userAge
            }
            sessionStorage.setItem("userInfo", JSON.stringify(aboutUser));
        };
    };
    return found;
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login").addEventListener("click", function (event) {
        event.preventDefault();

        let email = getInputValue("email");
        let password = getInputValue("password");

        let person = new Person(email, password);
        if ("users" in sessionStorage) {
            let allUsers = JSON.parse(sessionStorage.users);
            if ("length" in allUsers) {
                let found = findUser(allUsers,person);
                if (found) {
                    sessionStorage.setItem("logined", "ok");
                    document.location.href = "success.html";
                } else {
                    alert("Bele bir istifadeci yoxdu");
                };
            } else {
                let oneUser = JSON.parse(sessionStorage.users);
                if (oneUser.userEmail == email && oneUser.userPassword == password) {
                    sessionStorage.setItem("logined", "ok");
                    document.location.href = "success.html";
                    let aboutUser = {
                        userName: oneUser.userName,
                        userEmail: oneUser.userEmail,
                        userSurname: oneUser.userSurname,
                        userAge: oneUser.userAge

                    }
                    sessionStorage.setItem("userInfo", JSON.stringify(aboutUser));
                } else {
                    alert("Bele bir istifadeci yoxdu");
                };
            };
        } else {
            alert("Once qeydiyyatdan kecin!!");
        };
    });
});