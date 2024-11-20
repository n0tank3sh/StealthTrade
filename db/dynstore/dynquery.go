package dynstore

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/n0tank3sh/StealthTrade/db/store"
)

type Dynstore struct {
	Db *sql.DB
}

func New(db *sql.DB) *Dynstore {
	return &Dynstore{
		Db: db,
	}
}

type GetOrderByFieldParam struct {
	Ascending bool
	Field     string
	PageStart int
	PageEnd   int
}

func (dynstore *Dynstore) GetOrderByField(param GetOrderByFieldParam) ([]store.Position, error) {
	orderby := ""
	if param.Ascending {
		orderby = "ASC"
	} else {
		orderby = "DESC"
	}
	query := fmt.Sprintf("SELECT * FROM orders ORDER BY %s %s OFFSET %d LIMIT %d", param.Field, orderby, param.PageStart, param.PageEnd)
	rows, err := dynstore.Db.QueryContext(context.Background(), query)
	if err != nil {
		return nil, err
	}
	var orders []store.Position
	err = rows.Scan(&orders)
	if err != nil {
		return nil, err
	}
	return orders, nil
}
