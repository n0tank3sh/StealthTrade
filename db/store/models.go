// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0

package store

import (
	"database/sql"
	"time"

	"github.com/google/uuid"
)

type Currency struct {
	ID      int32
	Code    string
	CurName string
	Symbol  sql.NullString
}

type Order struct {
	ID        uuid.UUID
	Amount    float64
	Premium   float64
	Currency  int32
	Payment   int32
	CreatedAt time.Time
	ExpiryAt  time.Time
}

type PaymentMethod struct {
	ID int32
}

type User struct {
	Token string
	Uname string
	Dpurl string
}
