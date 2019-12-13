//imports & modules
var mysql = require("mysql");
var inquirer = require("inquirer");

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
    if (err) throw err;
    console.log("Connection to database works.")
});

//load products table
connection.query("SELECT * FROM products", function (err, response) {
    console.table(response);
})


inquirer.prompt([
    {
        message: "Please enter ID of product you want.",
        type: "input",
        name: "productID"
    },
    {
        message: "How many would you like to buy?",
        type: "input",
        name: "quantity"
    }
]).then(function (answer) {
    //console.log(answer);
    var id = +answer.productID
    //console.log(id);
    connection.query("SELECT * products WHERE products.id = ?", [id], function (err, response) {
        console.table(response);
    })
})



