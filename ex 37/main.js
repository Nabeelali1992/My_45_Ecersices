function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of the shirt is \"".concat(size, "\" and the message printed on it is \"").concat(message, "\""));
}
//invoking function
make_shirt();
//recalling function with updating size 
make_shirt("Medium");
//recalling function with updating size and message
make_shirt("Small", "I love JavaScript");
