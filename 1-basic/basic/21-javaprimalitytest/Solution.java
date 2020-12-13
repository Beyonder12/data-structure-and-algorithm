


import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;

// to develop easily the multithread application java. multithreading is the ability program or operating system process to manage its use by more than one user at a time and to even managae multiple request by the same user without having to have multiple copies of the programmin running in the computer
import java.util.concurrent.*;
import java.util.regex.*;


public class Solution {
    
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in);){
            System.out.println(scanner.nextBigInteger().isProbablePrime(100) ? "prime": "not prime");
        }
    }

}
