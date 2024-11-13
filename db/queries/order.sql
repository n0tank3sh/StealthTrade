-- name: VerifyToken :one 
SELECT COUNT(*) FROM users WHERE token = $1;
-- name: GetOrder :one
SELECT * FROM orders WHERE id = $1;
-- name: InsertOrder :exec
INSERT INTO orders (amount, currency, created_at, expiry_at, premium, payment) VALUES  ($1, $2, $3, $4, $5, $6) RETURNING id;
-- name: PatchOrder :exec
UPDATE orders SET amount = $1, currency = $2, created_at = $3, expiry_at = $4, premium = $5, payment = $6 WHERE id = $7; 
-- name: DeleteOrder :exec
DELETE FROM orders WHERE id = $1;
-- name: CountOrders :one
SELECT COUNT(*) FROM orders;