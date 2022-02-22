import java.util.*;

class OddEven {
    //modifier -- without instantiated -- data type

    // main function
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Please input your number : ");
        int n = input.nextInt();
        oddEven(n);
    }

    // derivative  function
    public static void oddEven(int number) {
        for(int i = 1; i <= number; i++) {
            if(i%2 == 0) {
                System.out.println(i + " is even!");
            } else {
                System.out.println(i + " is odd!");
            }
        }
    }
}

