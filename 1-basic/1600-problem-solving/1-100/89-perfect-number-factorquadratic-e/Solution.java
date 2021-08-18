public class Solution {
  public static void main(String[] args) {
    System.out.println(perfectNumber(28));// true
    System.out.println(perfectNumber(6));// true
  }

  public static boolean perfectNumber(int number) {
    if(number <= 1) return false;
    int sum = -number;
    for(int i = 1; i * i < number; i++) {
      if(number % i == 0) sum += i + number/i;
    }
    return sum == number;
  }
}
