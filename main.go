package main

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"

	_ "github.com/lib/pq"
)

func MustGet(varname string) string {
	result := os.Getenv(varname)
	if result == "" {
		panic("environment variable is not set")
	}
	return result
}
func main() {
	database_url := MustGet("DATABASE")
	db, err := sql.Open("postgres", database_url)
	if err != nil {
		panic("Couldn't connect to the database server")
	}

	mux := http.NewServeMux()

	err = http.ListenAndServe("127.0.0.1:8080", mux)
	if err != nil {
		fmt.Print(err.Error())
	}
	defer db.Close()
}
