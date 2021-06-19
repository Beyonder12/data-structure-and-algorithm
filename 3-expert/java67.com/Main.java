import java.util.*;
class Main {
  public static void main(String[] args) {
    System.out.println(isPalindrom("hello"));
    reverseString("hello");
  }

  public static String isPalindrom(String str) {
    int i = 0, j = str.length() - 1;
    while(i < j) {
      if(str.charAt(i) != str.charAt(j)) {
        return "Tidak Karena "  + " adalah palindrom";
      }
      i++;
      j--;
    }
    return "ya " + str + " adalah palindrom";
  }

  public static void reverseString(String str) {
    int i = 0, j = str.length() - 1;
    char[] tempArr = str.toCharArray();
    while(i < j) {
      char temp = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = temp;
      i++;
      j--;
    }

    System.out.println(new String(tempArr));
  }

}
