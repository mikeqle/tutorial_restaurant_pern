-- Final SQL statements used for creating our Postgres Database(s)

-- Creating database
CREATE DATABASE restaurant_finder;

-- Create table restaurants
CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    location VARCHAR(200) NOT NULL,
    price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5)
);