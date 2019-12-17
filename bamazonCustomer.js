//imports & modules
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    password: "password",
    database: "bamazonDB"
});

//establish connection
connection.connect(function (err) {
    if (err) throw err
    console.log("\n----Welcome to Bamazon!----\n");
    loadProducts();
});

//load products table
function loadProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        var table = new Table({
            head: ["ID#", "Product", "Price", "Quantity"]
        });
        for (i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity]
            )
        }
        console.log(table.toString() + "\n");
        orderPrompt();
    });
};

function orderPrompt() {
    inquirer.prompt([{
        name: "productID",
        type: "input",
        message: "What is the ID of product you want?",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log("Please enter a number!");
                return false;
            }
        }
    },
    {
        name: "quantity",
        type: "input",
        message: "How many of this item would you like to buy?",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log("Please enter a number!");
                return false;
            }
        }
    }]).then(function (answer) {
        //console.log(answer);
        var id = +answer.productID
        //console.log(id);
        connection.query("SELECT * products WHERE id = "+ productID, function (err, response) {
            console.table(response);
        })
    })
}



