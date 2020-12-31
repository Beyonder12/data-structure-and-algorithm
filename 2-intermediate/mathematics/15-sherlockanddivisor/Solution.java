import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        int q = in.nextInt();
        for (int i = 0;i<q;i++) {
            int n = in.nextInt();

            int count = 0;
            int limit = (int)Math.sqrt(n);

            for(int x=2;x<=limit;x++) {
                if(n%x==0){
                    if((n/x)%2==0)count++;

                    if(n/x!=x){
                        if(x%2==0)count++;
                    }
                }
            }
            if (n%2==0)count++;
            System.out.println(count);
        }

    }
    
}
