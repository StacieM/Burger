CREATE DATABASE if not exists burgers_db;

USE burgers_db;

    CREATE TABLE if not exists burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
    );