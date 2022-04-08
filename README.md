# Mr. Roboger's Neighborhood

#### Meron G.Tekie

#### This web page is a Pizza place where its price depends upon your choice of size and the number of toppings you the customer selects

## Technologies Used

- HTML

- CSS

- JavaScript

- JQuery

- Bootstrap

## Description

This website is built to return the value of a given number in to count from zero up to the number given as an input and then converts numbers that contain 1,2,3 in to _"Beep!","Boop", and "Wont you be my neighbor?"_ respectively. And if the number contains 1 and 2 and/or 3 The application follows the hierarchical system and displays the string of the higher number

## Setup/Installation Requirements

- Fork this [Github](https://github.com/MeronTekie/MrRogobers-Neighborhood.git) link and clone it to your machine
- Navigate through the directory
- Select the index.html File
- Click index.html file , you machine's browser (_Chrome is highly recommended_)should be able to run the file

## Known Bugs

- Issue in overwriting the previous existing output unless page is refreshed.

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
