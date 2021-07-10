import java.util.*;

class Solution {

  public static List<String> readBinaryWatch(int num) {
      if (num < 0 || num > 10) {
          return new ArrayList<>();
      }

      List<String> result = new ArrayList<>();

      for (int hour = 0; hour <= 11; hour++) {
          for (int minute = 0; minute <= 59; minute++) {

      // If number of bits in hour + number of bits in minute equals num
      // add to result or else do nothing.
              if (Integer.bitCount(hour) + Integer.bitCount(minute) == num) {

                  result.add(String.format("%d:%02d", hour, minute));

              }
          }
      }

      return result;
  }

  public static void main(String[] args) {
    System.out.println(readBinaryWatch(11));
    List<Character> arrayList = new ArrayList<>();
    arrayList.add('a');
    arrayList.add('b');
    System.out.println(arrayList);
    System.out.println(Integer.bitCount(7));
  }

}
