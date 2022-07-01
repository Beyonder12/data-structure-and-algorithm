package main

import "fmt"

func main() {

	kamaz10 := kamaz{car{10}}
	var wheelCount = kamaz10.numberOfWheel()

	fmt.Println(wheelCount)
}

type car struct {
	wheelCount int
}

func (c car) numberOfWheel() int {
	return c.wheelCount
}

type kamaz struct {
	car
}
