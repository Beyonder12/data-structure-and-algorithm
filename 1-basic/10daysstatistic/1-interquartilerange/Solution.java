import java.util.Scanner;
import java.util.Arrays;


public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        int size = scan.nextInt();
        int [] element = new int[size];
        int [] frequency = new int[size];
        for (int i = 0; i < size; i++) {
            element[i] = scan.nextInt();
        }

        int numElements = 0;
        for (int i = 0; i< size; i++) {
            frequency[i] = scan.nextInt();
            numElements += frequency[i];
        }

        int [] data = new int[numElements];
        int dataIndex = 0;
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < frequency[i]; j++) {
                data[dataIndex] = element[i];
                dataIndex++;
            }
        }
        Arrays.sort(data);

        double q1 = findMedian(data, 0, data.length / 2 - 1);
        double q3 = findMedian(data, (data.length + 1) / 2, data.length - 1);

        System.out.println(q3 - q1);
    }

    private static double findMedian(int [] array, int start, int end) {
        if ((end - start) % 2 == 0) {
            return (array[(end + start) / 2]);
        } else {
            int value1 = array[(end + start) / 2];
            int value2 = array[(end + start) / 2 + 1];
            return (value1 + value2) / 2.0;
        }
    }
    
}
