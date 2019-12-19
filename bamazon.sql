DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad", "Electronics", 399.99, 4),
("Bose Speakers", "Electronics", 200.49, 7),
("iPhone 11", "Phones", 1199.99, 25),
("Alexa TV Remote", "Electronics", 149.99, 50),
("Apple MacBook Air", "Computers", 699.95, 17),
("Samsung Galaxy Note 10", "Phones", 899.99, 14),
("Toshiba 32in LED HDTV", "TV", 129.99, 9),
("Samsung 65in 4K TV", "TV", 479.99, 10),
("Microsoft Surface Laptop 3", "Computers", 799.00, 11),
("PlayStation 4", "Video Games", 299.99, 4),
("Nintendo Switch", "Video Games", 299.99, 5)

-- CREATE TABLE departments(
--     department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     department_name VARCHAR(50) NOT NULL,
--     over_head_costs DECIMAL(10,2) NOT NULL
-- );

-- INSERT INTO departments(department_name, over_head_costs)
-- VALUES ("Electronics", 500),
-- ("Phones", 1000),
-- ("Computers", 1500),
-- ("TV", 700),
-- ("Video Games", 2000);