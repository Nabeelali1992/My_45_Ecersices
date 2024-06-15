//Creating a guest list array
var guestlist = ["Adil", "kazim", "Kanwal", "Areeba"];
//making variables for those guest who cant come
var dontcome = guestlist[0];
//print the guest name who cant come
console.log(dontcome, "Nahi aa saktay hain");
//Add or remove values from guest list array
guestlist.splice(0, 1, "Nabeel");
//print message for the bigger table
console.log("Good news ,We have found a bigger table or dinner");
//Add a new values of starting index of array 
guestlist.unshift("Adil");
//Adding a new guest of ending index of array
guestlist.push("Anwar");
//Adding a new guest in the middle index of array
var middleIndex = Math.floor(guestlist.length / 2);
//Adding a new guest to middle index of array
guestlist.splice(middleIndex, 0, "Ummat");
console.log("updated list of our Guests");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", Would you like to dinner with me"));});
//inform that only two guest invited for dinner
console.log("unfortunatly, the new dinner table wont arrive on time, so i can invite only two guest to dinner with me");
//using while loop to remove guest from the array until only two remain 
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log(`Sorry, ${removedGuest} I cant invite to dinner`);
}
console.log("invitation to the last 2 Guests");
guestlist.forEach(function (lasttwo) { return console.log("lucky ".concat(lasttwo, ",you are still invited for the dinner")); });
//removing two guest from the list
guestlist.pop();
guestlist.pop();

console.log("Empty list",guestlist);