DROP IF EXISTS volunteer_db;
CREATE DATABASE volunteer_db;
USE volunteer_db;

CREATE TABLE inventory
(
	id int NOT NULL AUTO_INCREMENT,
    product_title varchar(255) NOT NULL,
    price int() NOT NULL,
	stock int() NOT NULL,
    seller varchar(50) NOT NULL,
    details varchar(2000),
	PRIMARY KEY (id)
);
