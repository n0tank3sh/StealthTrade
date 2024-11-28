package monero

import (

	moneroWallet "github.com/monero-ecosystem/go-monero-rpc-client/wallet"
)

type Client struct { 
  Address string
  RpcClient moneroWallet.Client 
}

type Wallet struct { 
  Address string
  Password string
}

type Account struct { 
  Idx uint
}

type Destination struct { 
  Amount  uint64
  Address string
}

type Transaction struct { 
}

type Signature struct {
}

func NewClient(Address string) (*Client, error) { 
  var client Client
  client.Address = Address
  client.RpcClient = moneroWallet.New(moneroWallet.Config{
    Address:  client.Address,
  })
  return &client, nil
}

func (c *Client) CreateWallet(address string, password string) (Wallet, error) {
  newWallet := Wallet{
    Address:  address,
    Password:  password,
  } 
  err := c.RpcClient.CreateWallet(&moneroWallet.RequestCreateWallet{
    Filename:  newWallet.Address, 
    Password:  newWallet.Password, 
    Language:  "English"})
  return newWallet, err
}

func (c *Client) OpenWallet(wallet Wallet) error { 
  err := c.RpcClient.OpenWallet(&moneroWallet.RequestOpenWallet{
    Filename:  wallet.Address,
    Password:  wallet.Password,
  })
  return err
}

func (c *Client) CloseCurrentWallet() error { 
  err := c.RpcClient.CloseWallet()
  return err
}

func (c *Client) CheckBalance(a Account) (uint64,error) { 
  result, err := c.RpcClient.GetBalance(&moneroWallet.RequestGetBalance{
    AccountIndex: uint64(a.Idx),
  })
  return result.Balance, err
}

func (c *Client) TransferToAddress(destinations []Destination, account Account, priority uint32) (Transaction,error) {
  walletDestination := make([]*moneroWallet.Destination, len(destinations))
  for i, destination := range(destinations) {
    walletDestination[i] = &moneroWallet.Destination{ 
    Amount:  destination.Amount, 
    Address: destination.Address,
    }
  }
  var transaction Transaction 
  _, err := c.RpcClient.Transfer(&moneroWallet.RequestTransfer{
    Destinations: walletDestination ,
  })
  return transaction, err
}

func (c *Client) PrepareMultiSigWallet(wallet Wallet) (string,error) { 
  var data string
  err := c.OpenWallet(wallet)
  if err != nil { 
    return  "", err
  }
  resp, err := c.RpcClient.PrepareMultisig()
  if resp != nil && err != nil { 
    data = resp.MultisigInfo
  }
  return data, err
}

func (c *Client) MakeMultiSig(wallet Wallet, info []string, threshold uint64, password string) (string,  error) { 
  err := c.OpenWallet(wallet)
  if err != nil { 
    return "",  err
  }
  multiSigRequest :=  moneroWallet.RequestMakeMultisig{
    Threshold: threshold,
    MultisigInfo:  info,
    Password: password,
  }
  resp, err := c.RpcClient.MakeMultisig(&multiSigRequest)
  if err != nil { 
    return "",  err 
  }
  data := resp.MultisigInfo
  return data, nil
}

func (c *Client) FinalizeMultiSigWallet(wallet Wallet, multiSigInfo []string) (string,error) { 
  finalizeMultiSigRequest := moneroWallet.RequestFinalizeMultisig{
    MultisigInfo: multiSigInfo,
    Password: wallet.Password,
  }
  resp, err := c.RpcClient.FinalizeMultisig(&finalizeMultiSigRequest)
  if err != nil { 
    return "", nil
  }
  return resp.Address,nil
}

func (c *Client) CreateMultiSigWallet(wallets []Wallet, m, n uint64)  (Wallet,error) { 
  var prepareMultisigHexes []string
  for _, wallet := range(wallets) { 
    err := c.OpenWallet(wallet)
    if err != nil {
      return Wallet{}, err
    }
    hexes, err := c.PrepareMultiSigWallet(wallet)
    if err != nil {
      return Wallet{}, err
    }
    prepareMultisigHexes = append(prepareMultisigHexes, hexes)
  }
  var madeMultisigHexes []string
  for i, wallet := range(wallets) {
    var peerMultiSigHexes []string
    for j := range(wallets) {
      if i != j { 
        peerMultiSigHexes = append(peerMultiSigHexes, prepareMultisigHexes[j])
      }
    }
    multisigHex,  err := c.MakeMultiSig(wallet, peerMultiSigHexes, m, "")
    if err != nil {
      return Wallet{}, err
    }
    madeMultisigHexes = append(madeMultisigHexes, multisigHex)
  }
  return Wallet{}, nil
}

func (c *Client) CreateMultiSigTransaction(multiSigWallet Wallet, address []string, amount []float64) (string, error) { 
  return "", nil
}
