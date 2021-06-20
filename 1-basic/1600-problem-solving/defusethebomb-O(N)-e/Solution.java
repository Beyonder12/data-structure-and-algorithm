public class Solution {
  public int[] decrypt(int[] code, int k) {
    if(k == 0) return new int[code.length];

    int[] prefix = new int[code.length * 2 + 1];
    for(int i = 0; i < code.length * 2; i++) {
      prefix[i+1] = prefix[i] + code[i % code.length];
    }

    int[] ret = new int[code.length];
    for(int i = 0; i < code.length; i++) {
      int end = i + k;
      if(k < 0) {
        ret[i] = prefix[i + code.length] - prefix[end + code.length];
      }
      else {
        ret[i] = prefix[end + 1] - prefix[i+1];
      }
    }
    return ret;
  }
}
