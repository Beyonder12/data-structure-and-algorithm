package main

import (
	"fmt"
	"os"
)

func main() {
	args := os.Args
	fmt.Println("Argument: ")
	fmt.Println(args)

	fmt.Println(args[1])
	fmt.Println(args[2])
	fmt.Println(args[3])

	name, err := os.Hostname()
	if err == nil {
		fmt.Println("Hostname: ", name)
	} else {
		fmt.Println("Error", err.Error())
	}

}
