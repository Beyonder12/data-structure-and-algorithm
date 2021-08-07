import java.util.*;


//O(n) time because only the iteration through the words can be counted towards time complexity everything else takes constant time,
//O(1) space because worst case there are two hash maps that will be in the memory both hashmaps will have constant space.
    


class Solution {

    public String shortestCompletingWord(String licensePlate, String[] words) {
        Map<Character, Integer> map = new HashMap();
        String lp = licensePlate.toLowerCase();

        for(int i = 0; i < lp.length(); i++) {
            char ch = lp.charAt(i);

            if(Character.isLetter(ch)) 
                map.put(ch, map.getOrDefault(ch,0) + 1);
        }

        int length = Integer.MAX_VALUE;
        String s = "";

        for(int i = 0; i < words.length; i++) {
            if(words[i].length() >= length)
                continue;
            
            String word = words[i];

            if(canBuild(map, word)) {
                s = word;
                length = word.length();
            }
        }
        return s;
    }

    private boolean canBuild(Map<Character, Integer> map, String word) {
        Map<Character, Integer> map1 = new HashMap();

        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            map1.put(ch, map1.getOrDefault(ch, 0) + 1);
        }

        for(char ch: map.keySet()) {
            if(map.getOrDefault(ch, 0) > map1.getOrDefault(ch, 0))
                return false;
        }

        return true;
    }

    public static void main(String[] args) {
        ArrayList<Character> array = new ArrayList<>();
        array.add('a');
        array.add('a');
        array.add('a');
        array.add('b');

        Map<Character, Integer> map1 = new HashMap<>();
        for(Character ch : array) {
            System.out.println(ch);
            map1.put(ch, map1.getOrDefault(ch, 0) + 1);
        }

        System.out.println(map1);
        System.out.println(array);
    }

}