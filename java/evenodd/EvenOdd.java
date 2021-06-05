import java.util.*;

public class EvenOdd {
  public static void main(String[] args) {
    int num, count;
    Scanner input = new Scanner(System.in);
    System.out.println("Please input the count");
    count = input.nextInt();
    System.out.println("Please input the number, We will check the odd and the even type");


    for(int i = 0; i < count; i++) {
      num = input.nextInt();
      System.out.println((num%2==0) ? "It's even number, my Master!" : "it's odd number, Master!");
    }

    System.out.println("Thank you for using mine, Master!");
  }
}
