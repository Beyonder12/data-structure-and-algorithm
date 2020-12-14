// Complete this code or write yout own from scratch
// this is very cool input hashmap or dictionary(python) or object js
import java.util.*;
import java.io.*;

public class Solution {
    // BufferedReader is a Java class to reads the text from an input stream character, arrays, lines
    public static void main(String[] args) 
    throws Exception {
        // read input and save as entries in a hashmap
        BufferedReader br = new BufferedReader(new InputStreamReader (System.in));
        int n = Integer.valueOf(br.readLine());
        HashMap<String, Integer> map = new HashMap<>();
        while (n-- > 0) {
            String name = br.readLine();
            int phone = Integer.valueOf(br.readLine());
            map.put(name, phone);
        }

        // read each query and check if its in our HashMap
        String s;
        while((s = br.readLine()) != null) {
            if (map.containsKey(s)) {
                System.out.println(s + "=" + map.get(s));
            } else {
                System.out.println("Not found");
            }
        }

        br.close();
    }
    
}
