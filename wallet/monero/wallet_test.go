package monero_test

import (
	"testing"

	"github.com/n0tank3sh/StealthTrade/wallet/monero"
)

func TestWalletCreation(t* testing.T) {
  cli, err := monero.NewClient("http://127.0.0.1:4000/json_rpc")
  if err != nil {
    t.Fatal(err)
  }
  _, err = cli.CreateWallet("test", "securepassword123")
  if err != nil { 
    t.Fatal(err)
  }
}

func TestMultiSigWallet2by3Creation(t* testing.T) { 
  cli, err := monero.NewClient("http://127.0.0.1:4000/json_rpc")
  if err != nil { 
    t.Fatal(err)
  }
  buyer, err := cli.CreateWallet("buyerWallet", "password1231")
  if err != nil { 
    t.Fatal(err)
  }
  seller, err := cli.CreateWallet("sellerWallet", "password1232")
  if err != nil {
    t.Fatal(err)
  }
  escrow, err := cli.CreateWallet("escrowWallet", "password1233")
  var wallets []monero.Wallet
  wallets = append(wallets, buyer, seller, escrow)
  _, err = cli.CreateMultiSigWallet(wallets,  3, 2)
  if err != nil {
    t.Fatal(err)
  }
}
