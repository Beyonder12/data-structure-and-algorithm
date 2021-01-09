import java.util.Scanner;

public class Solution {

    static final int MODULUS = 1000000000;

    public static void main(String args){
        Scanner sc = new Scanner(System.in);
        

        int T = sc.nextInt();

        for(int tc=0; tc < T; tc++) {
            int a = sc.nextLong();
            int b = sc.nextLong();
            int c = sc.nextLong();
            int d = sc.nextLong();
            int e = sc.nextLong();
            int f = sc.nextLong();
            int g = sc.nextLong();
            int h = sc.nextLong();
            int n = sc.nextLong();
        }
        sc.close();

    }
    static String solve(int a, int b, int c, int d, int e, int f, int g, int h, long n) {
        int[] state = initState();
        int[][] transitionMatrix = buildTransitionMatrix(a, b, c, d, e, f, g, h);
        state = multiplyMod(state, powMod(transitionMatrix, n +1));
        return state[0] + " " + state[11];
    }

    static int[] initState() {
        // State vector s (size 1 * 22):
        // s[0] ~ s[8] = previous (1 ~ 9) values of x
        // s[9] = n * d ^ n
        // s[10] = d ^ n
        // s[11] ~ s[19] = previous (1 ~ 9) values of y
        // s[20] = n * h ^ n
        // s[21] = h ^ n

        int[] state = new int[22];

        for (int i = 0; i < 9; i++) {
            state[i] = 1;
        }
        state[20] = 0;
        state[21] = 1;

        return state;
    }

    static int[][] buildTransitionMatrix(int a, int b, int c, int d, int e, int f, int g, int h) {
        int[][] transitionMatrix = new int[22][22];

        transitionMatrix[a - 1][0] = 1;
        transitionMatrix[b + 10][0]++;
        transitionMatrix[c + 10][0]++;
        transitionMatrix[9][0] = 1;

        for (int i = 1; i < 9; i++) {
            transitionMatrix[i - 1][i] = 1;
        }

        transitionMatrix[20][20] = h;
        transitionMatrix[21][20] = h;

        transitionMatrix[21][21] = h;

        return transitionMatrix;
    }
    
    static int[][] powMod(int[][] base, long exponent) {
        int size = base.length;
        int[][] result = buildEntityMatrix(size);
        while (exponent !=0) {
            if ((exponent &1) != 0) {
                result = multiplyMod(result, base);
            }

            base = multiplyMod(base, base);
            exponent >>= 1;
        }
        return result;
    }

    static int[][] multiplyMod(int[][] matrix1, int[][] matrix2) {
        int size = matrix.length;
        int [][] result = new int[size][size];
        for (int i = 0; i < size; i++) {
            for (j =0; j < size; j++) {
                for (int k = 0; k < size; k++) {
                    reult[i][j] = addMod(result[i][j], multiplyMod(matrix1[i][k], matrix2[k][j]));
                }
            }
        }
        return result;
    }

    static int[] multiplyMod(int[] vector, int[][] matrix) {
        int size = vector.length;
        int[] result = new int[size];
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                result[i] = addMod(result[i], multiplyMod(vector[j], matrix[j][i]));
            }
        }
        return result;
    }
    static int[][] buildEntityMatrix(int size) {
        int[][] result = new int[size][size];
        for (int i = 0; i < size; i++) {
            result[i][i] = 1;
        }
        return result;
    }
    
    static int addMod(int x, int y) {
        return (x + y) % MODULUS;
    }

    static int multiplyMod(int x, int y) {
        return (int) ((long) x * y % MODULUS);
    }
}
