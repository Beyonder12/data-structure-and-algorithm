import java.io.*;
import java.util.*;


public class Solution {
    
    public static  double mean(int arr[], int n) {
        long sum=0;
        for(int i = 0; i < n; i++) {
            sum+= arr[i];
        }
        double ans = (double) sum / (long) n;
        return ans;
    }

    public static double median(int arr[], int n) {
        Arrays.sort(arr);
        int mid = n/2;
        double ans = ((double) arr[mid] + (double) arr[mid-1]) / 2;
        return ans;
    }

    public static int mode(int X[], int n){
        int mode=0, temp, count, max=0;
        for(int i=0;i<n;i++) {
            temp=X[i];
            count=0;
            for(int j=0; j<n; j++) {
                if(temp==X[j])
                {
                    count++;
                }
                if(count>max)
                {
                    max=count;
                    if(max==1)
                    {
                        mode=X[0];
                    }
                    mode=temp;
                }
            }
        }
        return mode;
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int arr[] = new int[n];
        for(int i=0; i<n; i++){
            arr[i] = s.nextInt();
        }

        System.out.format("%.1f\n", mean(arr,n));
        System.out.format("%.1f\n", median(arr,n));
        System.out.println(mode(arr,n));
    }



}
