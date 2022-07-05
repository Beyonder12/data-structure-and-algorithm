package main

import (
	"fmt"
	"time"
)

func printHello() {
	fmt.Println("hello")
}

func main() {
	go printHello()
	fmt.Println("jello")

	time.Sleep(1 * time.Second)
}
