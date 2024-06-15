// Define a Function to create a car Object with optional options using rest function...

function create_Car(manufacturer, model, ...options) {
    // Initialize a Car Object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add Additional otions to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = [value.trim()]
    })
    return car;
}

// Call the function to create a car object

let my_car = create_Car("Toyota", "Camry", "color:Red", "Sunroof:Yes", "Year:2024");

// Print the variable to ensure all the information in car object
console.log(my_car);