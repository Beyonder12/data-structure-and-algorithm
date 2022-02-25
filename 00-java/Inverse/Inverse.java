import java.util.*;
import java.io.*;

public class Inverse {

  public static int[] reverse(int[] arr) {
    int i = 0, j = arr.length - 1;
    while(i < j) {
      int temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
    return arr;
  }
  public static void main(String[] args) {
    int[] arr = {5,4,3,2,1};
    System.out.println( Arrays.toString(reverse(new int[] {1,2,3,4,5})));
  }


}
