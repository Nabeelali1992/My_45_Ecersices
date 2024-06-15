//List is not Empty
var userName = ["Admin", "Kazim", "kanwal", "Nabeel", "Ummat"];
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello Admin,would you like to see a status report?");
    }
    else {
        console.log("\"Hello,\"".concat(oneUser, "\" \"Thankyou for logging in again.\""));
    }
});
//List is empty Now
userName = [];
if (userName.length == 0) {
    console.log("\n User name List Empty We need to find some users!");
}
