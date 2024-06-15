var guestlist = ["Ummat","Areeba","kanwal","Adil"];
var dontcome = guestlist[0];
console.log(dontcome, "cant come");
guestlist.splice(0, 1, "Nabeel");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });