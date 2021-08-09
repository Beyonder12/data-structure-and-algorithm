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
        ArrayList<Character> arrayList = new ArrayList<>();
        arrayList.add('a');
        arrayList.add('a');
        arrayList.add('a');
        arrayList.add('b');

        Map<Character, Integer> map = new HashMap<>();//match
        for(Character ch : arrayList) {
            System.out.println(ch);
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        ArrayList<Character> arrayList1 = new ArrayList<>();
        for(char ch : map.keySet()) {
            arrayList1.add(ch);
        }

        String s = "Iam a superhero";
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            // System.out.println( ch + " isLetter? " + Character.isLetter(ch));
            System.out.println( ch + " isLetter? " + Character.isLetter(ch));
        }

        System.out.println(map);
        System.out.println(arrayList);
        System.out.println(Integer.MAX_VALUE);
        System.out.println(arrayList1);
        System.out.println(-12 % 10);
    }

}