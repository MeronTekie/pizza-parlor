# Pizza-Parlor

#### Meron G.Tekie

#### This web page is a Pizza place where its price depends upon your choice of size and the number of toppings you select

## Technologies Used

- HTML

- CSS

- JavaScript

- JQuery

- Bootstrap

## Description

The website is built to give customers a choice of their size of Pizza and it charges them according to the number of toppings they have selected in which per topping it is an additional 1.99.And it gives the flexibility for the customers to pick according to their choice and budget.

## Setup/Installation Requirements

- Fork this [Github](https://github.com/MeronTekie/pizza-parlor.git) link and clone it to your machine
- Navigate through the directory
- Select the index.html File
- Click index.html file , you machine's browser (_Chrome is highly recommended_)should be able to run the file

## Known Bugs

- No known bugs

## License

[MIT](https://opensource.org/licenses/MIT)

- Copyright (c) Meron G. Tekie 2022

## Describe: Pizza()

-Test: "It should return an object of three properties of customer's name choice of pizza size and toppings
Code: const myPizza = new Pizza (["pepperoni","cheese","pineapple"],"Large");
Expected Output: { toppings: ["anchovies", "pineapple"], size: "Large" }

## Describe: myPizza.pizzaSizePrice()

-Test: "It should return the price of the pizza according the size
Code: = myPizza.pizzaSizePrice(Large);
Expected Output: pizzaPrice = large: 8.99;

## Describe: myPizza.toppingsPrice();

-Test: "It should return the total price of the topping according the number of toppings multiplied by 1.99
Code: = myPizza.toppingsPrice(3)
Expected Output: pizzaPrice = : 5.97,

## Describe: totalPrice()

-Test: "It should return the total price of the Pizza
Code: = totalPrice(7.99,1.99)
Expected Output: pizzaPrice = 9.98;
