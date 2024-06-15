function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//Invoking function with name of the City
describe_city("Karachi");
//Invoking function with different name of the City
describe_city("Lahore");
//Invoking function with different name and country of the City
describe_city("Madina", "Saudi Arabia");
