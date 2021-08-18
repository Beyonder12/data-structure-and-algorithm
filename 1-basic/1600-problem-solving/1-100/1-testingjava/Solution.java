public class Solution {
  static void pyramid(int n) {
    for(int i = 0; i < 2*n; i+=2) {
      for(int j = n - i ; j > -n; j--) {
        System.out.print(" ");
      }
      for(int j = 0; j <= i; j++) {
        System.out.print("* ");
      }
      System.out.println();
    }

  }
  public static void main(String[] args) {
    pyramid(9);
  }
}
