package orders

import (
	"context"

	"github.com/n0tank3sh/StealthTrade/db/dynstore"
	"github.com/n0tank3sh/StealthTrade/db/store"
)

type OrderClient struct {
  dynstore *dynstore.Dynstore
  qstore *store.Queries
}

func offlimitCheck() error {
  return nil
}

type DisplayPosition struct { 
}

func (client *OrderClient) FetchOrders(field string, offset, limit uint64, ascending bool) ([]DisplayPosition, error) {
  if limit == 0 { 
  }
  var displayPositions []DisplayPosition
  totalOrders, err := client.qstore.CountOrders(context.Background())
  if err != nil { 
    return nil,err 
  }
  if (limit - offset) >= uint64(totalOrders) {
    limit = uint64(totalOrders) - offset
  }
  client.dynstore.GetOrderByField(dynstore.GetOrderByFieldParam{
    Field: field,
    Ascending: ascending,
    PageStart: int(offset),
    PageEnd: int(limit),
  })
  return displayPositions, nil
}
