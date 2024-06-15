// Define a Function to create a car Object with optional options using rest function...
function create_Car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize a Car Object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add Additional otions to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = [value.trim()];
    });
    return car;
}
// Call the function to create a car object
var my_car = create_Car("Toyota", "Camry", "color:Red", "Sunroof:Yes", "Year:2024");
// Print the variable to ensure all the information in car object
console.log(my_car);
