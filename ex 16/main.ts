//Creating a guest list entry
var guestlist = ["Nabeel", "Ummat", "Areeba","Adil"]; 
//maikng variables for those guest who cant come
var dontcome = guestlist[0];
//print the guest name who cant come
console.log(dontcome, "Nahi aa saktay hain");
//Add or remove values from guest list array
guestlist.splice(0, 1, "Kanwal");
//print message for the bigger table
console.log("Good news ,We have found a bigger table for dinner");
//Add a new value of starting index of array
guestlist.unshift("Anwar");
//Adding a new guest of ending index of array
guestlist.push("kausar");
//Adding a new guest to middle index of array
var middleIndex = Math.floor(guestlist.length / 2);
//Adding a new guest to middle inbox of array
guestlist.splice(middleIndex, 0, "kazim");
console.log("updated list of our guest");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", Would you like to Dinner with me")); });
    
