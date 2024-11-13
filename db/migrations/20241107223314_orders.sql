-- +goose Up
-- +goose StatementBegin
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User Table
CREATE TABLE users (
  token TEXT NOT NULL PRIMARY KEY, 
  uname TEXT NOT NULL,
  dpurl TEXT NOT NULL
);
-- Create the currency table
CREATE TABLE currencies (
    id SERIAL PRIMARY KEY,              -- Unique ID for each currency
    code TEXT NOT NULL UNIQUE,    -- ISO currency code (e.g., USD, EUR)
    cur_name TEXT NOT NULL,          -- Currency name (e.g., US Dollar, Euro)
    symbol TEXT                  -- Currency symbol (e.g., $, €)
);

-- Insert default currencies
INSERT INTO currencies (code, cur_name, symbol) VALUES 
    ('USD', 'United States Dollar', '$'),
    ('EUR', 'Euro', '€'),
    ('JPY', 'Japanese Yen', '¥'),
    ('GBP', 'British Pound', '£'),
    ('AUD', 'Australian Dollar', 'A$'),
    ('CAD', 'Canadian Dollar', 'C$'),
    ('CHF', 'Swiss Franc', 'CHF'),
    ('CNY', 'Chinese Yuan', '¥'),
    ('INR', 'Indian Rupee', '₹');

CREATE TABLE payment_method(
  id SERIAL PRIMARY KEY
);

CREATE TABLE orders(
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
  amount DOUBLE PRECISION NOT NULL DEFAULT 0,
  premium DOUBLE PRECISION NOT NULL DEFAULT 0.0,
  currency INT NOT NULL DEFAULT 1,
  payment INT NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  expiry_at TIMESTAMP NOT NULL,
  FOREIGN KEY (currency) REFERENCES currencies(id),
  FOREIGN KEY (payment) REFERENCES payment_method(id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS currencies;
DROP TABLE IF EXISTS payment_method;
-- +goose StatementEnd
