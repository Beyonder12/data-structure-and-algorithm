import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {
    static int gameWithCells(int n, int m) {
        return (int)Math.ceil(n / 2. ) * (int)Math.ceil(m / 2.);
    }

    private static final Scanner scanner = new Scanner (System.in);

    public static void main(String[] args) throws IOException {
        Bufferedwriter Bufferedwriter = new BufferedWriter(new OutputStreamWriter(System.out));

            String[] nm = scanner.nextLine().split(" ");

            int n = Integer.parseInt(nm[0].trim());

            int m = Integer.parseInt(nm[1].trim());

            int result = gameWithCells(n, m);

            bufferedWriter.write(String.valueOf(result));
            bufferedWriter.newLine();

            bufferedWriter.close();
    }
}