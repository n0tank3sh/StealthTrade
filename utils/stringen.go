package utils

import (
	"crypto/rand"
	"encoding/base64"
)

func GenerateRandomString(length uint) (string) {
  bytes := make([]byte, length)
  rand.Read(bytes)
  randomString := base64.StdEncoding.EncodeToString(bytes)
  return randomString
}

