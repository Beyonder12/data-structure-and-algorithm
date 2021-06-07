import java.util.*;
import java.io.*;

public class Solution {
  static String sort_string(String s) {
    char[] a = s.toCharArray();
    Arrays.sort(a);
    return Arrays.toString(a);
    // return String.valueOf(a);
  }

  public static int numSpecialEquivGroups (String[] A) {
    Set<String> s = new HashSet<> ();
    for (String w : A) {
      String odd = "", even = "";
      for (int i = 0; i < w.length (); i++) {
        if (i % 2 == 0) even += w.charAt(i);
        else            odd += w.charAt(i);
      }
      odd = sort_string (odd);
      even = sort_string (even);
      s.add (odd + even);
    }
    return s.size();
  }

  public static void main(String[] args) {
    System.out.println("hello");
    String[] A = new String[] {"abcd", "cbad", "xyzz", "zzxy", "zzyx"};
    System.out.print(numSpecialEquivGroups(A));
    System.out.println(sort_string("edcba"));
  }
}
