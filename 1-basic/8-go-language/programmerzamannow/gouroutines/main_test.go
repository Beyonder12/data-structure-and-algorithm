package main

func RunHelloWorld() string {
	fmt.Println("Hello")
}

func TestCreateGoroutine(t *testing.T) {
	go RunHelloWorld()
	fmt.Println("hello")
	time.Sleep(1 * time.Second)
}
