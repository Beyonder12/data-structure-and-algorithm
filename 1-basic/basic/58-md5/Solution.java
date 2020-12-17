/*
input:
HelloWorld

output:
68e109f0f40ca72a15e05cc22786f8e6

message digests are secure one-way hash functions that take 
abritary-sized data and output a fixed-length hash value. 
A message digest object starts out initialized. the data is proccessed trough
it using the update methods. at any point reset can be called to reste the disgest
*/


import java.io.*;
import java.util.*;
import java.security.MessageDigest;
import java.nio.charset.Charset;
import java.util.Scanner;

public class Solution {
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String message = in.nextLine();
        in.close();

        try {
            MessageDigest messageDigest = MessageDigest.getInstance("MD5");
            messageDigest.update(message.getBytes());
            byte[] hash = messageDigest.digest();

            for (byte b : hash) {
                System.out.printf("%02x", b);
            }
        } catch (Exception e) {}
    }
}
