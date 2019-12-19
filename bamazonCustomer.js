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
            , colWidths: [5, 20, 10, 12]
        });
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].id, res[i].product_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(table.toString());
        orderPrompt();

    });
};

function orderPrompt() {
    inquirer.prompt([{
        name: "productID",
        type: "input",
        message: "What is the ID of product you want? [Quit with q]",
        validate: function (value) {
            if (isNaN(value) === false || value === "q") {
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
        message: "How many of this item would you like to buy? [Quit with q]",
        validate: function (value) {
            if (isNaN(value) === false || value === "q") {
                return true;
            } else {
                console.log("Please enter a number!");
                return false;
            }
        }
    }]).then(function (answer) {
        promptExit(answer.productID);
        promptExit(answer.stock_quantity);
        //console.log(answer);
        var id = +answer.productID
        var quantity = +answer.quantity
        //console.log(id);
        connection.query("SELECT * FROM products WHERE id = " + id, function (err, response) {
            console.table(response);
            console.log(response[0].stock_quantity);
            //check against the inventory
            if (quantity <= response[0].stock_quantity) {
                var query = connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: response[0].stock_quantity - quantity
                        },
                        {
                            id: id
                        }
                    ],
                    function (err, res) {
                        console.log(res + " products updated!\n");
                    }
                );
                console.log(query.sql);
                loadProducts();
            } else {
                console.log("Not enough items in stock. Please request again.");
                loadProducts();
            }

        })
    })
}

function promptExit(input) {
    if (input === "q") {
        //console.log("Quit with q");
        process.exit(0)
    }
}



