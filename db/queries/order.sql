-- name: VerifyToken :one 
SELECT COUNT(*) FROM ninja WHERE token = $1;
-- name: GetOrder :one
SELECT * FROM position WHERE id = $1;
-- name: InsertOrder :exec
INSERT INTO position (amount, currency, created_at, expiry_at, premium, payment) VALUES  ($1, $2, $3, $4, $5, $6) RETURNING id;
-- name: PatchOrder :exec
UPDATE position SET amount = $1, currency = $2, created_at = $3, expiry_at = $4, premium = $5, payment = $6 WHERE id = $7; 
-- name: DeleteOrder :exec
DELETE FROM position WHERE id = $1;
-- name: CountOrders :one
SELECT COUNT(*) FROM position;
-- name: CreateTrade :exec
UPDATE position SET order_status = $1, buyer = $2, seller = $3, trade_created_at = NOW(), trade_update_at = NOW() WHERE id = $4; 
-- name: DeleteTrade :exec
UPDATE position SET order_status = $1, buyer = NULL, seller = NULL, trade_created_at = NULL, trade_update_at = NULL WHERE id = $2; 
-- name: LockEscrow :exec
UPDATE position SET order_status = $1, escrow_buyer_key = $2, escrow_seller_key = $3, escrow_created_at = NOW(), escrow_updated_at = NOW(), trade_update_at = NOW() WHERE id = $4; 
-- name: ReleaseEscrow :exec
UPDATE position SET order_status = $1, escrow_buyer_key = NULL, escrow_seller_key = NULL, escrow_created_at = NULL, escrow_updated_at = NULL, trade_update_at = NOW() WHERE id = $2; 
-- name: RaiseDispute :exec
-- name: ResolveDispute :exec