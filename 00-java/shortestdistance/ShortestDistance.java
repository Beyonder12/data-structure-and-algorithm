import java.util.*;
import java.io.*;

public class ShortestDistance {
  public static int[] shortestToChar(String s, char c) {
    int n = s.length();
    int[] ans = new int[n];
    int prev = Integer.MIN_VALUE/2;

    for (int i = 0; i < n; ++i) {
      if(s.charAt(i) == c) prev = i;
      ans[i] = i - prev;
    }

    prev = Integer.MAX_VALUE/2;
    for (int i = n - 1; i >=0; i--) {
      if(s.charAt(i) == c) prev = i;
      ans[i] = Math.min(ans[i], prev - i);
    }

    return ans;
  }

  public static void main(String[]  args) {
    System.out.println(Arrays.toString(shortestToChar("aaab", 'b')));
  }


}
