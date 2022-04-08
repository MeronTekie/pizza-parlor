// Business Logic

function Pizza(name, pizza, toppings) {
  this.name = name;
  this.pizza = pizza;
  this.toppings = toppings;
}

Pizza.prototype.pizzaSizePrice = function () {
  let pizzaPrice;
  if (this.pizza == "Regular") {
    pizzaPrice = 7.99;
  } else if (this.pizza == "Large") {
    pizzaPrice = 8.99;
  } else {
    pizzaPrice = 10.99;
  }
  return pizzaPrice;
};

Pizza.prototype.toppingsPrice = function (toppings) {
  let numberOfToppings = 0;
  let eachToppingPrice = 1.99;
  for (let i = 0; i < toppings.length; i++) {
    if (toppings[i] != "No-topping") {
      numberOfToppings += 1;
    } else {
      numberOfToppings;
    }
  }
  let toppingPrice = numberOfToppings * eachToppingPrice;
  return toppingPrice;
};

Pizza.prototype.totalPrice = function (pizzaPrice, toppingPrice) {
  let total = pizzaPrice + toppingPrice;
  return total;
};

//User Interface Logic
$(document).ready(function () {
  $("form#pizza-parlor").submit(function (event) {
    event.preventDefault();
    const customerName = $("input#name").val();
    const pizzaSize = $("select#pizza-size").val();
    const firstTopping = $("select#first-topping").val();
    const secondTopping = $("select#second-topping").val();
    const thirdTopping = $("select#third-topping").val();

    const toppings = [firstTopping, secondTopping, thirdTopping];
    const myPizza = new Pizza(customerName, pizzaSize, toppings);

    let toppingTotal = myPizza.toppingsPrice(myPizza.toppings);
    let pizzaPrice = myPizza.pizzaSizePrice(this.pizza);
    let totalPrice = myPizza.totalPrice(pizzaPrice, toppingTotal);

    $("div#output").removeClass();
    $("#output").html(
      "Your total is : " +
        totalPrice +
        "\n" +
        "Enjoy Your Pizza .We hope to see you soon!"
    );
  });
});
