public class Solution {

  public static char findThedifference(String s, String t) {
    int n = t.length();
    char c = t.charAt(n - 1);
    for(int i = 0; i < n - 1; i++) {
      c ^= s.charAt(i) ^ t.charAt(i);
    }
    return c;
  }
  public static void main(String[] args) {
    System.out.println(findThedifference("abcd", "abcde"));
    // System.out.println(101 ^ 0);
    // System.out.println('e' ^ 'b');
    // System.out.println('e' ^ 'c');
    // System.out.println('e' ^ 'd');
    System.out.println('e' ^ 'e');
  }
}
