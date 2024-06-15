var userName = ["Admin", "Nabeel", "Ummat", "kausar", "Anwar"];
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello Admin,would you like to see a status report?");
    }
    else {
        console.log("\"Hello,\"".concat(oneUser, "\"\"Thankyou for logging in again.\""));
    }
});
