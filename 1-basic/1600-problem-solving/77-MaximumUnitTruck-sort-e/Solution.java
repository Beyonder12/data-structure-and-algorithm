import java.util.*;

public class Solution {
  public static int maximumUnits(int[][] boxTypes, int truckSize) {
    Arrays.sort(boxTypes, (a, b) -> b[1] - a[1]);
    int boxes = 0;
    for (int[] box : boxTypes) {
      if (truckSize >= box[0]) {
        boxes += box[0] * box[1];
        truckSize -= box[0];
      } else {
        boxes += truckSize * box[1];
        return boxes;
      }
    }
    return boxes;
  }

  public static void main(String[] args) {
    int[][] boxTypesPass = new int[][] {{1,3},{2,2},{3,1}};
    int truckSizePass = 4;

    System.out.print(maximumUnits(boxTypesPass, truckSizePass));

  }

}
