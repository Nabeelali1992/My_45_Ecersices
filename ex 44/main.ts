// Define a Function with a rest parameter that accept items arguments representing our sandwich

function makeSandwich(...items:string[]){
    console.log("Making a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich\n")
}

// Call the Function 3 times with different arguments
makeSandwich("Bread", "Cheese", "Tomato");
makeSandwich("Bread", "Cheese", "chicken", "Lettuce", "Mustard Sauce", "Olives", "Mushroom");
makeSandwich("Bread","Chicken","Cheese", "Tomato","Egg","Coleslaw");