import java.util.*;


// Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
// Output: "steps"
// Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
// "step" contains 't' and 'p', but only contains 1 's'.
// "steps" contains 't', 'p', and both 's' characters.
// "stripe" is missing an 's'.
// "stepple" is missing an 's'.
// Since "ste
public class Solution1 {

    public static void main(String[] args) {
        String result = shortestCompletingWord("1s3 PSt", new String[]{"step","steps","stripe","stepple"});
        System.out.println(result);
        
    }

    public static String shortestCompletingWord(String licensePlate, String[] words) {
        Map<Character, Integer> mapLicensePlate = new HashMap<Character, Integer>();
        String result = "";
        char[] licensePlateCharList = licensePlate.toLowerCase().toCharArray();
        for(char ch : licensePlateCharList) {
            if(Character.isLetter(ch)) 
                mapLicensePlate.put(ch, mapLicensePlate.getOrDefault(ch, 0) + 1);
        }
        System.out.println("mapLicensePlate : " + mapLicensePlate);
        int length = Integer.MAX_VALUE;

        for (String word : words) {
            if(word.length() >= length)
                continue;
            String wordIter = word;
            if(canBuild(mapLicensePlate, wordIter)) {
                result = wordIter;
                length = wordIter.length();
            }
        }

        return result;
    }

    private static boolean canBuild(Map<Character, Integer> map, String word) {
        Map<Character, Integer> mapWords = new HashMap<>();
        char[] wordCharArray = word.toCharArray();
        for(char ch : wordCharArray) {
            mapWords.put(ch, mapWords.getOrDefault(ch, 0) + 1);
        }

        for(char ch : map.keySet()) {
            if(map.getOrDefault(ch, 0) > mapWords.getOrDefault(ch, 0))
                return false;
        }

        return true;
    }
    
}
