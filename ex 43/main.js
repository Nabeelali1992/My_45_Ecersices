// Making funtion show_magicians()
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Making function make_great()
function make_great(magician) {
    return magician.map(function (name) { return (name = "The Great ".concat(name)); });
}
// Making an array of magicians
var magician_name = ["Hermione", "Harry Poter", "Rohn"];
// Making a Copy of Original Array through .Slice()Function
var copy_magician_name = magician_name.slice();
// Calling function make_great() to add The Great with magician names
var copy_great_magician = make_great(copy_magician_name);
// Show both arrays Original and Copied
// Original
console.log("\nOriginal Magician Names\n");
show_magicians(magician_name);
//Copied
console.log("\nCopied Magician Names\n");
show_magicians(copy_great_magician);
