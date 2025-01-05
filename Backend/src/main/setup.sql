CREATE DATABASE portfolio_db;

USE portfolio_db;

CREATE TABLE stocks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ticker VARCHAR(50) NOT NULL UNIQUE,
    quantity INT NOT NULL,
    buy_price DOUBLE NOT NULL
);
