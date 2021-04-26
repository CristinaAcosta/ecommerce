-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db

CREATE TABLE catergory (
    id INT UNSIGNED AUTO_INCREMENT Primary Key NOT NULL, 
    catergory_name VARCHAR(50) NOT NULL
);

CREATE TABLE product (
    id INT UNSIGNED AUTO_INCREMENT Primary Key NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    /* Validates that the value is decimal??*/
    price DECIMAL UNSIGNED NOT NULL,
     /* Validates that the value is numeric??*/
    stock INT NOT NULL DEFAULT 10,
    /* References the Category model's id??*/
    catergory_id INT
);

CREATE TABLE tag(
 id INT UNSIGNED AUTO_INCREMENT Primary Key NOT NULL,
 tag_name VARCHAR(50)
);

CREATE TABLE product_tag(
 id INT UNSIGNED AUTO_INCREMENT Primary Key NOT NULL,
  /* References the product model's id??*/
 product_id INT,
  /* References the tag model's id??*/
 tag_id INT 
);
