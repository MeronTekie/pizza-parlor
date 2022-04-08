// Business Logic

function Pizza(name, pizza, toppings) {
  this.name = name;
  this.pizza = pizza;
  this.toppings = toppings;
}

Pizza.prototype.pizzaSizePrice = function () {
  let pizzaPrice = 0;
  if (this.pizza == "Regular") {
    pizzaPrice = 7.99;
  } else if (this.pizza == "Large") {
    pizzaPrice = 8.99;
  } else {
    pizzaPrice == 10.99;
  }
  return pizzaPrice;
};

Pizza.prototype.toppingsPrice = function (numberOfToppings) {
  let eachToppingPrice = 1.99;
  let toppingPrice = numberOfToppings * eachToppingPrice;
  return toppingPrice;
};

let myPizza = new Pizza("Meron", "Regular", ["pineapple", "cheese"]);
console.log(myPizza.pizzaSizePrice(this.pizza));

console.log(myPizza.toppingsPrice(myPizza.toppings.length));
