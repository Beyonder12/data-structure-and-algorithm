import java.util.ArrayList;

public class Testing {
    public static void main(String[] args) {
        ArrayList<Character> arrayList = new ArrayList<Character>();
        // arrayList.add('a', 'b');
        System.out.println(arrayList);
        String s = "leeetcode";
        char[] ch = s.toCharArray();
        

        for (int i = 0; i < s.length();) {
            int j = i + 1, count = 1;
            while(ch[i] == ch[j]) {
                count ++;
                j++;
            }
            if(count == 1) arrayList.add(ch[i]);
            if(count >= 2) {
                arrayList.add(ch[i]);
                arrayList.add(ch[j]);
            }
            // arrayList.add(s.charAt(i), s.charAt(j));

            i = j;
            // System.out.print(i);
            // i++;
        }

        // System.out.println(arrayList);
    }

    
}



// /**
//  * @param {string} s
//  * @return {string}
//  */
// var makeFancyString = function(s) {
//     let res = [];

//     for (let i = 0; i < s.length;) {
//         let j = i + 1, count = 1;
//         while(s[i] === s[j]) {
//             count++;
//             j++;  
//         }
//         if(count === 1) res.push(s[i]);
//         if(count >= 2) res.push(s[i], s[i+1]);
     
//         i = j;
//     }
//     return (res.join(''));
    
    
    
// };