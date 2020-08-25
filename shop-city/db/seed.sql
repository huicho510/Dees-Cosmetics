USE inventory_db;

INSERT INTO product_inventory (product_title, price, stock, seller, product_condition, details, postedDate)
VALUES ("Apple Iphone SE", 899.99, 15, "Gerry Smith", "New", "Brand New Apple Iphone SE, does not come with Charger.", curdate());

INSERT INTO product_inventory (product_title, price, stock, seller, product_condition, details, postedDate)
VALUES ("Flintstones Gummy Vitamins Men", 15.99, 100, "David Blaine", "Used", "Opened container of Flintstones Gummy Vitamins for Men, I only ate one!", curdate());

INSERT INTO product_inventory (product_title, price, stock, seller, product_condition, details, postedDate)
VALUES ("Used Sony PSP", 80.50, 1, "Supero Market", "Used", "Found a PSP on the ground yesterday, hopefully it works! First come, first serve.", curdate());