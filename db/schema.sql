CREATE DATABASE if not exists burgers_db;

USE burgers_db;

    CREATE TABLE if not exists burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
    );
    