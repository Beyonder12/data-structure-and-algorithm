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

	//verodic function
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
	sayHelloWithFilter("Bb˜", spamFilter)

	//Anynomous function
	blacklist := func(name string) bool {
		return name == "admin"
	}

	registerUser("admin", blacklist)
	registerUser("Fajrr", blacklist)

	//recursive function
	fmt.Println(factorialRecursive(5))

	//program function
	countter := 0
	increment := func() {
		fmt.Println("Increment")

	}

	increment()
	increment()
	fmt.Println(countter)

	//defer function
	runApplication(1)

	//panic function
	runApp(false)

	//recover function
	runApp1(false)
}

//Below is the not-main function

//recover function
func endApp1() {
	message := recover()
	if message != nil {
		fmt.Println("Error dengan message", message)
	}
	fmt.Println("Aplikasi Selesai")
}
func runApp1(error bool) {
	defer endApp1()
	if error {
		panic("Aplikasi Error")
	}
	fmt.Println("Aplikasi berjalan")
}

//panic function
func endApp() {
	fmt.Println("Aplikasi selesai")
}
func runApp(error bool) {
	defer endApp()
	if error {
		panic("Aplikasi error")
	}
	fmt.Println("Aplikasi berjalan")
}

// defer function execute some func after func
func logging() {
	fmt.Println("selesai memanggil function")
}

func runApplication(val int) {
	result := 10 / val
	defer logging()
	fmt.Println("Run application", result)
}

//recursive function
func factorialRecursive(value int) int {
	if value == 1 {
		return 1
	} else {
		return value * factorialRecursive((value - 1))
	}
}

//Anynomous function
type Blacklist func(string) bool

func registerUser(name string, blacklist Blacklist) {
	if blacklist(name) {
		fmt.Println("You are blocked", name)
	} else {
		fmt.Println("Welcome", name)
	}
}

// func blacklistAdmin(name string) bool {
// 	return name == "admin"
// }

// func blacklistRoot(name string) bool {
// 	return name == "root"
// }

//function as parameter
type Filter func(string) string //function type declaration

func sayHelloWithFilter(name string, filter func(string) string) {
	filteredName := filter(name)
	fmt.Println("Hello ", filteredName)
}
func sayHelloWithFilter1(name string, filter Filter) {
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
