import java.util.Arrays;

public class Solution {
  public static void main(String[] args) {
    int[] A = new int[]{1,1,2,2};
    System.out.println("The result is " + Arrays.toString(removeElement(A, 2)));
    System.out.println(Arrays.toString(A));
  }

  public static int[] removeElement(int[] A, int elem) {
      int l = A.length;
      for (int i=0; i<l; i++) {
          if (A[i] == elem) {
              A[i--] = A[l-- -1];
          }
      }
      return A;
  }
}
