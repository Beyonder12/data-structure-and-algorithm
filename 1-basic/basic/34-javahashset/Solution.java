import java.io.*;
import java.util.*;
// java.text package consist of classes and interfaces that are useful of writing internationalized programs that handle local customs, such as date and time formatting and string alphabetization correctly
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    // HashSet class implements the Set interface, backed by a hash table which is actually a HashMap instance. doesnt allow duplicates
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int t = s.nextInt();
        String [] pair_left = new String[t];
        String [] pair_right = new String[t];

        for (int i = 0; i < t; i++) {
            pair_left[i] = s.next();
            pair_right[i] = s.next();
        }

        HashSet<String> pairs = new HashSet<String>(t);

        for (int i = 0; i <t; i++) {
            pairs.add("(" + pair_left[i] + ", " + pair_right[i] + ")" );
            System.out.println(pairs.size());
        }
    }
    
}
