import java.util.*;
import java.io.*;

public class IsPalindrome {
  public static void main(String[] args) {
    // print(new int[] {1,2,3,4,5});
    int[] array = new int[] {1,2,3,2,1};
    System.out.println(isPalindrome(array));
    // System.out.println(Arrays.toString(array));
  }

  static boolean isPalindrome(int[] arr) {
    int i = 0, j = arr.length - 1;
    while(i < j) {
      if(arr[i] != arr[j]) return false;
      i++;
      j--;
    }
    return true;
  }
}
