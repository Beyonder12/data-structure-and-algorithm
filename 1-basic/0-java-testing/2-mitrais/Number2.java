import java.io.*;
import java.util.*;

public class Number2 {
    public static void main(String[]args) {
        int a = 5, f = 3;
        for (;;) {
            if((a+=f+1) > 8)
                break;
            else
            f = a%(f+1);
        }
        System.out.print(f*a);
    }
    
    // for (int i = 0; i < 5; i++) {
    //     System.out.println(i);
    // }
}
