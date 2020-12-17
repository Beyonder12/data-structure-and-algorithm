import java.util.*;
import java.security.*;


public class Solution {
    
    public static void main(String[] args) throws NoSuchAlgorithmException {
        Scanner input = new Scanner(System.in);
        MessageDigest m = MessageDigest.getInstance("SHA-256");
        m.reset();
        m.update(input.nextLine().getBytes());
        for (byte i : m.digest()) {
            System.out.print(String.format("%02x", i));
        }
        System.out.println();
    }
}
/*
input
HelloWorld

output
872e4e50ce9990d8b041330c47c9ddd11bec6b503ae9386a99da8584e9bb12c4


*/