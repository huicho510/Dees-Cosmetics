DROP IF EXISTS inventory_db;
CREATE DATABASE inventory_db;
USE inventory_db;

CREATE TABLE product_inventory
(
	id int NOT NULL AUTO_INCREMENT,
    product_title varchar(255) NOT NULL,
    price decimal(6, 2) NOT NULL,
	stock int(255) NOT NULL,
    seller varchar(50) NOT NULL,
    product_condition varchar(4),
    details varchar(2000),
    postedDate varchar(20) NOT NULL,
	PRIMARY KEY (id)
);

