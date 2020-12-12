import java.io.*;
import java.util.*;

public class Solution {
    //while loop
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = 0; 
        while(scan.hashNext()){
            i++;
            System.out.println(i + " " + scan.nextLine());
        }
    }
}
efe