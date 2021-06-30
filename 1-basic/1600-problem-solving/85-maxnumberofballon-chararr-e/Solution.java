
// import static org.junit.Assert.assertEquals;
// import org.junit.Test;

class Solution {
  public static void main(String[] args) {

    String text = "balloons";
    System.out.println(text.toCharArray());
    System.out.println("The max number of text " + text + " is 1 the result is " + maxNumberOfBalloons(text));
  }

  public static int maxNumberOfBalloons(String text) {
    int b = 0, a = 0, l = 0, o = 0, n = 0;
    for(char ch : text.toCharArray()) {
      switch(ch) {
        case 'b': ++b;
                break;
        case 'a': ++a;
                break;
        case 'l': ++l;
                break;
        case 'o': ++o;
                break;
        case 'n': ++n;
                break;
      }
    }

    return Math.min(Math.min(o/2, l/2), Math.min(Math.min(b, a), n));
  }

  // @Test
  // public void testMaxNumberOfBalloons() {
  //   assertEquals(1, maxNumberOfBalloons("balloons"));
  // }
}
