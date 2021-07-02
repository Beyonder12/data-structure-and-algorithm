

public class Solution {
  public static void main(String[] args) {
    System.out.println(canConstuct("aa" , "aabb"));//true
    System.out.println(canConstuct("tru", "rtt"));//false
    System.out.println(('b' - 'a'));
  }

  public static boolean canConstuct(String ransomNote, String magazine) {
    int[] arr = new int[26];
    for (int i = 0; i < magazine.length(); i++) {
      arr[magazine.charAt(i) - 'a']++;
    }
    for (int i = 0; i < ransomNote.length(); i++) {
      if(--arr[ransomNote.charAt(i) - 'a'] < 0) {
        return false;
      }
    }
    return true;
  }
}
