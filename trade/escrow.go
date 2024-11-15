package trade

import "github.com/n0tank3sh/StealthTrade/db/store"

type Transaction struct {
	OwnAddr      string
	ReceiverAddr string
}
type TransactionManager struct {
	store *store.Queries
}

func (t *TransactionManager) Lock(transaction *Transaction) {
}

func (t *TransactionManager) Release(transaction *Transaction) {
}
