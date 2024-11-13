package api

import (
	"github.com/n0tank3sh/StealthTrade/db/dynstore"
	"github.com/n0tank3sh/StealthTrade/db/store"
)

type Server struct {
	dynstore *dynstore.Dynstore
	store    *store.Queries
}

func NewServer(dynstore *dynstore.Dynstore, store *store.Queries) *Server {
	return &Server{
		dynstore: dynstore,
		store:    store,
	}
}
