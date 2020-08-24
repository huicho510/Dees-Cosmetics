USE inventory_db;

INSERT INTO inventory (product_title, price, stock, seller, condition, postedDate, createdAt, updatedAt, details)
VALUES ("Apple Iphone SE", 899.99, 15, "Gerry Smith", "New", "7/17/2020", curdate(), curdate(), "Brand New Apple Iphone SE, does not come with Charger.");

INSERT INTO inventory (product_title, price, stock, seller, condition, postedDate, createdAt, updatedAt, details)
VALUES ("Flintstones Gummy Vitamins Men", 15.99, 100, "David Blaine", "Used", "9/15/2010", curdate(), curdate(), "Opened container of Flintstones Gummy Vitamins for Men, I only ate one!");


INSERT INTO inventory (product_title, price, stock, seller, condition, postedDate, createdAt, updatedAt, details)
VALUES ("Used Sony PSP", 80.50, 1, "Supero Market", "Used", "1/01/2017", curdate(), curdate(), "Found a PSP on the ground yesterday, hopefully it works! First come, first serve.");
