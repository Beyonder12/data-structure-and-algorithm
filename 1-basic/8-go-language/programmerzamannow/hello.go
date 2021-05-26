package main

import "fmt"

func main() {
	fmt.Println("hello")
	person := map[string]string{
		"name":    "eko",
		"address": "subang",
	}
	fmt.Println(person)
	fmt.Println(person["name"])
	fmt.Println(person["address"])

	book := make(map[string]string)
	book["name"] = "smart"
	book["type"] = "expensive"
	book["isGood"] = "good"

	fmt.Println(len(book))
	delete(book, "name")
	fmt.Println(len(book))
	for counter := 1; counter <= 10; counter++ {
		fmt.Println(book["type"])
	}

	slice := []string{"Fajr", "Beyonder", "Budi", "Joko", "nono"}
	for i, val := range slice {
		fmt.Println("iteration", i, "=", val)
	}

	sayHello()
	sayHelloTo("Fajri", "Beyonder")
	firstName, middleName, lastName := getFullName()
	fmt.Println(firstName, middleName, lastName)

	fmt.Println(sumAll(1, 2, 3, 4, 5))
	slice1 := []int{1, 2, 3, 4, 5}
	tot := sumAll(slice1...)
	fmt.Println(slice1)
	fmt.Println(tot)

	//function value
	goodBye := getGoodBye
	fmt.Println(goodBye("Fajri"))

	//function as parameter
	sayHelloWithFilter("Eko", spamFilter)
	sayHelloWithFilter("Anjing", spamFilter)
}

//Below is the not-main function

//function as parameter
func sayHelloWithFilter(name string, filter func(string) string) {
	filteredName := filter(name)
	fmt.Println("Hello ", filteredName)
}

func spamFilter(name string) string {
	if name == "Anjing" {
		return "..."
	} else {
		return name
	}
}

//Function value
func getGoodBye(name string) string {
	return "Sayonara " + name
}

//verodic function
func sumAll(numbers ...int) int {
	total := 1
	for _, number := range numbers {
		total *= number
	}
	return total
}

func getFullName() (string, string, string) {
	return "Fajri", "Illahi", "Ganteng"
}

func sayHello() {
	fmt.Println("meow")
}

func sayHelloTo(firstName string, lastName string) {
	fmt.Println("Hello", firstName, lastName)
}

//byte uint8, rune int32, int minimal int32, uint minimal int32
