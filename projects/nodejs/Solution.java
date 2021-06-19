import java.util.Arrays;
import java.util.HashSet;

public class Solution {
  public static void main(String[] args) {
    int [] arr = {1,2,3}, arr1 = {16,15,27,9};
    String str = "";
    // for (int e : arr) {
    //   str += e;
    // }
    // System.out.println(str);
    permute(arr);
    permute(arr1);
    // System.out.println(Arrays.toString(arr.join("")));
  }
  public static void permute(int[] full) {
    String str = "";
    for (int e : full) {
      str += e;
    }
    if (str == null || str.length() == 0) {
      System.out.println("cannot string length of 0");
      return;
    }
    HashSet<Integer> set = new HashSet<Integer>();
    permute("", str, set);
    // System.out.println(set);
    int min = 2147483647;//max integer value
    for (int s : set) {
      min = Math.min(min, s);
    }
    System.out.println(min);

  }
  private static void permute(String prefix, String remaining, HashSet set) {

    if(remaining.length() == 0) {

      int prefix1 = Integer.parseInt(prefix);
      set.add(prefix1);
      System.out.println(prefix);
      return;
    }
    for (int i = 0; i < remaining.length(); i++) {
      permute(prefix + remaining.charAt(i), remaining.substring(0,i) + remaining.substring(i + 1, remaining.length()), set);
    }
  }
}
