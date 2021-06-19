import java.io.*;
import java.util.*;

public class Program
{
  public static String charRemoveAt(String param, int index) {
    return param.substring(0, index) + param.substring(index+1);
  }

	// public static String procVowel(String param){
  //   String ans = "", vowelDictionary = "aiueo";
  //   param = param.toLowerCase();
  //   for(int i = 0 ; i < param.length(); i++) {
  //     if(param.charAt(i) == 'a' || param.charAt(i) == 'i' || param.charAt(i) == 'u' || param.charAt(i) == 'e' || param.charAt(i) == 'o' ) {
  //       ans += param.charAt(i);
  //       String paramSlice = charRemoveAt(param, i);
  //       for(int j = 0; j < paramSlice.length(); j++) {
  //         if(paramSlice.charAt(j) == param.charAt(i)) ans += paramSlice.charAt(j);
  //       }
  //     }

  //   }

	// 	return ans;
	// }

  public static String procVowel(String param){
    // Map <Character, Integer> map = new HashMap <Character, Integer>();
    // for(int i = 0; i < param.length(); i++) {
    //   if(map.get(param.charAt(i)) > 1 ) {
    //     map.put(param.charAt(i), map.get(param.charAt(i)) + 1);
    //   }
    //   else {
    //     map.put(param.charAt(i), 1);
    //   }
    // }

    param = param.toLowerCase();
    char[] characters = param.toCharArray();

    HashMap<Character, Integer> charMap = new HashMap<Character, Integer>();
    for(Character ch : characters) {
      if(charMap.containsKey(ch)) {
        charMap.put(ch, charMap.get(ch) + 1);
      }
      else {
        charMap.put(ch, 1);
      }
    }

    System.out.println(charMap);

		return "ans";

    // String ans = "";
    // for(int i = 0; i < param.length(); i++) {
    //   if(param.charAt(i-1) == param.charAt(i)) ans += param.charAt(i);
    //   for(int j = 0; )

    // }
    // System.out.println(ans);

    // return "ans";
	}

	public static String procConsonant(String param){

		String ans = "", vowelDictionary = "aiueo";
    param = param.toLowerCase();
    for(int i = 0 ; i < param.length(); i++) {
      if(param.charAt(i) != 'a' && param.charAt(i) != 'i' && param.charAt(i) != 'u' && param.charAt(i) != 'e' && param.charAt(i) != 'o' && param.charAt(i) != ' ' ) ans += param.charAt(i);
    }

		return ans;
	}

	public static void main(String[] args)
	{
    Scanner sc = new Scanner(System.in);
		System.out.print("Input one line of words (S) : ");
		String input = sc.nextLine();

		String charVowel = procVowel(input);
		String charConsonant = procConsonant(input);

		System.out.println("Vowel Characters : ");
		System.out.println(charVowel);
		System.out.println("Consonant Characters : ");
		System.out.println(charConsonant);
	}
}
