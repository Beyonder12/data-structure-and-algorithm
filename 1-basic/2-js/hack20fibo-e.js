function fibonacci(n) {

  if (n <= 0)return 0;
  let a = 0, b = 1;

  while (--n) {
      [a , b] = [b, b +a ]
  }

  return b

  }

  function fibonacci1(n) {

    if (n === 0)return 0;
    if (n === 1) return 1;
    return fibonacci(n -1) + fibonacci(n -2);

    }

  console.log(0, fibonacci(-6))
  console.log(0, fibonacci(0))
  console.log(1, fibonacci(1))
  console.log(1, fibonacci(2))
  console.log(2, fibonacci(3))
  console.log(3, fibonacci(4))
  console.log(5, fibonacci(5))
  console.log(8, fibonacci(6))
