# Bamazon

## Overview 
Welcome to Bamazon! Bamazon is a command line interface application that can be used to request and place real-time orders through a virtual storefront. Bamazon-CLI interacts with the Bamazon MySQL Database. It allows the users to view and purchase items from the inventory. Using the power of MySQL, Javascript, and Node.js, Bamazon will take in orders and deplete stock from the store's inventory.

### Installation:
Bamazon relies on Node.js to provide a command line interface to a MySQL database. Since Bamazon does not run on the browser, in order to run Bamazon a couple of steps of installation are required. They are as follows:

1. [Download](https://nodejs.org/en/download/) and install Node.js
2. [Download](https://dev.mysql.com/downloads/mysql/) and install MySQL
3. Create the database using the script bamazon.sql found in the repository 
4. Use the Node.js package manager to install the required Node.js packages. Running `npm install` from the command line will install the following Node.js packages:
    * MySQL
    * inquirer
    * cli-table3
    * chalk

### How Does It Work?
After you have made sure you have the appropriate downloads and `npm` packages installed on your computer, run  `bamazon` in your terminal. Type in `node bamazonCustomer.js`. This will run the Bamazon application. From there, Bamazon will prompt the user through a series of inquirer prompts. If you choose to `Make a purchase`, Bamazon will search the database for the current inventory and display all the available items in stock. 

Navigate through the menu options to input the order information, making sure to include the item ID, as well as the number of items you'd like to buy. From there, Bamazon will search the database for the item ID, match your chosen selection, and check whether the request can be completed. If the item is out of stock, Bamazon will notify you it cannot complete the order. 

### Example:

Bamazon-Demo:
<img src="/images/bamazon.gif">

However, if the number of items are in stock, Bamazon will complete your order, update/deplete the stock's inventory, and calculate the total cost of your transaction. 

### Example:

Bamazon-Demo2:
<img src="/images/bamazon2.gif">

Try it out yourself, saavy shoppers!

#### Future Development: 
Create a manager view where the manager can log in to: View Products for Sale, View Low Inventory, Add to Inventory, or Add New Product.

#### Technologies Used:
* JavaScript
* Node.js
* MySQL
* NPM Packages
---
© 2019 Monica Amitin 