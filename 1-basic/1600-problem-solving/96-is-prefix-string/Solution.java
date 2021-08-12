// class Solution {
//     public boolean isPrefixString(String s, String[] words) {
//         String u = "";
//         for(String t : words){
//             u += t;
//             if(s.equals(u))return true;
//         }
//         return false;
//     }
// }


class Solution {
    public static void main(String[] args) {
        System.out.println(isPrefixString("iloveleetcode", new String [] {"i", "love", "leetcode"}));
    }
    public static boolean isPrefixString(String s, String[] words) {
        String u = "";
        for(String t : words) {
            u += t;
            if(s.equals(u)) return true;
        }
        return false;
    }
    
}