package escrow

import (
	"github.com/n0tank3sh/StealthTrade/db/store"
	"github.com/n0tank3sh/StealthTrade/wallet/monero"
)

type EscrowClient struct{ 
  WalletClient monero.Client
  TradeID string
  Buyer string
  Seller string
  store *store.Queries
}

