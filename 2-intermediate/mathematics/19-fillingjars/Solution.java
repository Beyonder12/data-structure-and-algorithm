import java.util.Scanner;

/*

final is a non access modifier applicable only to a variable, a method or a class
final variable => to create constant variables
final methods => prevent method overring
final classes => prevent inheritance

*/
public class Solution {
  public static void main(final String[] args) {
    try (final Scanner in = new Scanner(System.in)) {
      final long n = in.nextLong();
      long sum = 0;
      for (int m = in.nextInt(); m > 0; m--) {
        sum += (1 - in.nextLong() + in.nextLong()) * in.nextLong();
      }
      System.out.println(sum / n);
    }
  }
}