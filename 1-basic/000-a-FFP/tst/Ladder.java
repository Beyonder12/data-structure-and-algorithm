import java.util.*;

public class Ladder {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer();
        sb.insert(0, "a");
        sb.insert(1, 2);
        sb.insert(2, 3);
        sb.insert(3, 4);
        sb.insert(2, 2);
        // System.out.println(sb+"fe");

        String a = "a";
        System.out.println(a.charAt(0) - '0');

    }
    static int doStuff(String[] args) {
        return Integer.parseInt(args[0]);
        char char1=65;  
        char char2=97;  
          
        System.out.println("char1: "+char1);  
        System.out.println("char2: "+char2);  
    }
}
