import java.util.*;
import java.io.*;

class Solution {
  public static void main(String[] args) {
    Set<Character> r1 = stringToSet("qwertyuiopQWERTYUIOP");
    System.out.println(r1);
  }

  public static Set<Character> stringToSet(String str){
    Set<Character> res = new HashSet<>();
    for(char c:str.toCharArray()){
        res.add(c);
    }
    return res;
}
}
