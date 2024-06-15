// Creating an Array
let pizzas = ["Chicken Tikka", "Malai Boti", "Fajita"];

// Using  for-Loop

for (let onePizza of pizzas) {
     let Discription: string;

    console.log(`I Like ${onePizza}`);
  
  if (onePizza == "Chicken Tikka") {
    Discription = " is very Spicy";
  } else if (onePizza == "Malai Boti") {
    Discription = " pizza is creamy and Tasty";
  } else {
    Discription = " pizza is loaded with capsicum, onion and lots of veggies";
  }
  console.log(`${onePizza}${Discription}`);
}
console.log("\n I love pizza");