import java.util.*;
import java.io.*;

// public class Solution {

//   public static int[] addition(int[] a) {
//     return a ;
//   }
//   public static void main(String[] args) {
//     int[] arr = new int[]{1,2,3,4};
//     System.out.print(addition);
//   }
// }

class Solution {
  public int fib(int N) {
      double goldenRatio = (1 + Math.sqrt(5)) / 2;
      return (int)Math.round(Math.pow(goldenRatio, N)/ Math.sqrt(5));
  }

  public static void main(String[] args) {
    fib(8);
  }
}
