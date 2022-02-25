lass Solution {
//   public String[] findWords(String[] words) {
//       Set<Character> r1 = stringToSet("qwertyuiopQWERTYUIOP");
//       Set<Character> r2 = stringToSet("asdfghjklASDFGHJKL");
//       Set<Character> r3 = stringToSet("zxcvbnmZXCVBNM");

//       List<String> res = new ArrayList<>();
//       for(String s:words){
//           boolean row1 = false, row2 = false, row3 = false;
//           for(Character c:s.toCharArray()){
//               if(r1.contains(c))
//                   row1 = true;
//               else if(r2.contains(c))
//                   row2 = true;
//               else if(r3.contains(c))
//                   row3 = true;
//           }

//           if((row1 && row2) || (row2 && row3) || (row1 && row3))
//               continue;
//           res.add(s);
//       }
//       return res.toArray(new String[0]);
//   }

//   public static Set<Character> stringToSet(String str){
//       Set<Character> res = new HashSet<>();
//       for(char c:str.toCharArray()){
//           res.add(c);
//       }
//       return res;
//   }
// }
