import java.util.*;
import java.io.*;

public class Solution {

  // static String sort_string(String s) {
  //   char[] a = s.toCharArray();
  //   Arrays.sort(a);
  //   return Arrays.toString(a);
  //   // return String.valueOf(a);
  // }

  // public static int numSpecialEquivGroups (String[] A) {
  //   Set<String> s = new HashSet<> ();
  //   for (String w : A) {
  //     String odd = "", even = "";
  //     for (int i = 0; i < w.length (); i++) {
  //       if (i % 2 == 0) even += w.charAt(i);
  //       else            odd += w.charAt(i);
  //     }
  //     odd = sort_string (odd);
  //     even = sort_string (even);
  //     s.add (odd + even);
  //   }
  //   return s.size();
  // }

  public static int numSpecialEquivGroups1(String[] A) {
    Set<String> set = new HashSet<>();
    // System.out.println(set.add("a"));
    // System.out.println(set);
    // System.out.println(Arrays.toString(A));
    // int[] odd = new int[26];
    // System.out.print(Arrays.toString(odd));
    // String str1 = "abc";
    // System.out.println(str1.charAt(1) - 'a');
    for (String str : A) {
      int[] odd = new int[26];
      int[] even = new int[26];

      for (int i = 0; i < str.length(); i++) {
        if(i % 2 == 0)  {
          even[str.charAt(i) - 'a']++;
        } else {
          odd[str.charAt(i) - 'a']++;
        }
      }
      System.out.println(Arrays.toString(even));
      System.out.println(Arrays.toString(odd));
      // System.out.println(Arrays.toString(odd+even));
      // System.out.println(Arrays.toString(odd) + Arrays.toString(even));

      String key = Arrays.toString(odd) + Arrays.toString(even);
      set.add(key);
      // System.out.println(set);
      // break;
    }
    return set.size();
  }

  public static int numSpecialEquivGroups2(String[] A) {
    HashSet<String> set = new HashSet<>();
    int result = 0;
    for(String str: A){
        if(set.add(getHashBySwap(str.toCharArray()))) {
            result++;
        }
    }
    return result;
  }

  private static String getHashBySwap(char[] chars){
    for(int i=0; i<chars.length;i++){
        for(int j=i+2;j<chars.length;){
            if(chars[i] > chars[j]) {
                char temp = chars[j];
                chars[j] = chars[i];
                chars[i] = temp;
            }
            j+=2;
        }
    }

    return String.valueOf(chars);
  }

  public static void main(String[] args) {

    // System.out.println("hello");
    String[] A = new String[] {"abcd","cdab","cbad","xyzz","zzxy","zzyx"};
    System.out.println(numSpecialEquivGroups2(A));
    // System.out.println(sort_string("edcba"));
  }

}
