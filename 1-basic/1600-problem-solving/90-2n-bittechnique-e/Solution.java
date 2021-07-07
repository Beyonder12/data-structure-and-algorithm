public class Solution {
  public static boolean squareChecker(int n) {
    return (n & n-1) == 0 && n > 0;
  }
  public static void main(String[] args) {
    System.out.println(squareChecker(16));
    System.out.println(squareChecker(2));
    System.out.println(squareChecker(8));
    System.out.println(squareChecker(3));
    System.out.println(squareChecker(5));
    System.out.println(squareChecker(66));
  }
}
