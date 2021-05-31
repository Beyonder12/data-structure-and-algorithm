package main

import "fmt"

func random() interface{} {
	return "Eko"
}

func main() {
	var result interface{} = random()
	var resultString string = result.(string)
	fmt.Println(resultString)
}
