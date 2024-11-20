package monero

import (
	"github.com/monero-ecosystem/go-monero-rpc-client/wallet"
)

type Client struct { 
  Addr string
  RpcClient wallet.Client 
}

type Wallet struct { 
  Filename string
  Password string
}

type Account struct { 
  Idx uint
}

type Destination struct { 
  amount  uint64
  address string
}

func NewClient(addr string) (*Client, error) { 
  var client Client
  client.Addr = addr
  client.RpcClient = wallet.New(wallet.Config{
    Address:  client.Addr,
  })
  return &client, nil
}

func (c *Client) CreateWallet(filename string, password string) (Wallet, error) {
  newWallet := Wallet{
    Filename:  filename,
    Password:  password,
  } 
  err := c.RpcClient.CreateWallet(&wallet.RequestCreateWallet{
    Filename:  filename, 
    Password:  password, 
    Language:  "English"})
  return newWallet, err
}

func (c *Client) OpenWallet(w Wallet) error { 
  err := c.RpcClient.OpenWallet(&wallet.RequestOpenWallet{
    Filename:  w.Filename,
    Password:  w.Password,
  })
  return err
}

func (c *Client) CloseCurrentWallet() error { 
  err := c.RpcClient.CloseWallet()
  return err
}

func (c *Client) CheckBalance(a Account) (uint64,error) { 
  result, err := c.RpcClient.GetBalance(&wallet.RequestGetBalance{
    AccountIndex: uint64(a.Idx),
  })
  return result.Balance, err
}

func (c *Client) TransferToAddress(destination []Destination, account Account) error { 
  return nil
}
