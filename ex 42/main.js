// Define the function printing magician names
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to add "The Great" to magician name through .map()
function make_great(magician) {
    return magician.map(function (name) { return ("The Great ".concat(name)); });
}
// Define an array of magician names
var magician_name = ["Hermione", "Harry Potter", "Rohn"];
// Call make_great() function and saved in a variable name "great_magician"
var great_magician = make_great(magician_name);
// Call show_magicians function that showws modified list of magician names
show_magicians(great_magician);
