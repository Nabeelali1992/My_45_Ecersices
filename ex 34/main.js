// Creating an Array
var pizzas = ["Chicken Tikka", "Malai Boti", "Fajita"];
// Using  for-Loop
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var onePizza = pizzas_1[_i];
    var Discription = void 0;
    console.log("I Like ".concat(onePizza));
    if (onePizza == "Chicken Tikka") {
        Discription = " is very Spicy";
    }
    else if (onePizza == "Malai Boti") {
        Discription = " pizza is creamy and Tasty";
    }
    else {
        Discription = " pizza is loaded with capsicum, onion and lots of veggies";
    }
    console.log("".concat(onePizza).concat(Discription));
}
console.log("\n I love pizza");
