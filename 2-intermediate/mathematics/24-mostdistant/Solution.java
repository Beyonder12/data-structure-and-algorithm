import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    static double solve(int[][] coordinates) {
        /** maxpoints=[ min x[x1, y1], max x[x2, y2], min y[x3, y3], max y[x4, y4] ] **/
        int[][] points = new int[][] { { coordinates[0][0], coordinates[0][1] },
                { coordinates[1][0], coordinates[1][1] }, { coordinates[0][0], coordinates[0][1] },
                { coordinates[1][0], coordinates[1][1] } };

        for (int x = 0; x < coordinates.length; x++) {
            if (coordinates[x][0] < points[0][0]) {
                points[0][0] = coordinates[x][0];
                points[0][1] = coordinates[x][1];
            }

            if (coordinates[x][0] > points[1][0]) {
                points[1][0] = coordinates[x][0];
                points[1][1] = coordinates[x][1];
            }

            if (coordinates[x][1] < points[2][1]) {
                points[2][0] = coordinates[x][0];
                points[2][1] = coordinates[x][1];
            }

            if (coordinates[x][1] > points[3][1]) {
                points[3][0] = coordinates[x][0];
                points[3][1] = coordinates[x][1];
            }
        }

        double max = 0;
        for (int y = 0; y < points.length - 1; y++) {
            for (int z = y + 1; z < points.length; z++) {
                double temp = Math
                        .sqrt(Math.pow(points[z][0] - points[y][0], 2) + Math.pow(points[z][1] - points[y][1], 2));
                max = (temp > max) ? temp : max;
            }
        }
        return max;
    }
    // static can be accessed without creating an obejct of the class
    private static final Scanner scanner = new Scanner(System.in); //final means only assign once

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[][] coordinates = new int[n][2];

        for (int coordinatesRowItr = 0; coordinatesRowItr < n; coordinatesRowItr++) {
            String[] coordinatesRowItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int coordinatesColumnItr = 0; coordinatesColumnItr < 2; coordinatesColumnItr++) {
                int coordinatesItem = Integer.parseInt(coordinatesRowItems[coordinatesColumnItr]);
                coordinates[coordinatesRowItr][coordinatesColumnItr] = coordinatesItem;
            }
        }

        double result = solve(coordinates);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
