import java.util.*;

public class PrintDuplicate {
  public static void main(String[] args) {
    printFindDuplicateCharacters("Programming");
    printFindDuplicateCharacters("Combination");
    printFindDuplicateCharacters("Java");
  }

  public static void printFindDuplicateCharacters(String word) {
    char[] characters = word.toCharArray();

    Map<Character, Integer> charMap = new HashMap<Character, Integer>();
    for(Character ch : characters) {
      if(charMap.containsKey(ch)) {
        charMap.put(ch, charMap.get(ch) + 1);
      }
      else {
        charMap.put(ch, 1);
      }
    }
    Set<Map.Entry<Character, Integer>> entrySet = charMap.entrySet();
    System.out.println("this is entry set: " + entrySet + "this is charMap : " + charMap                                                                                                                                                                                                                                                                                                    ) ;

    System.out.printf("List of duplicate characters in String '%s' %n", word);
    for (Map.Entry<Character, Integer> entry : entrySet) {
      if(entry.getValue() > 1) {
        System.out.printf("%s : %d %n", entry.getKey(), entry.getValue());
      }
    }
    System.out.println(charMap);
  }

  // Map<Character, Integer> charMap = new HashMap<Character, Integer>(); for (Character ch : characters) {


}
