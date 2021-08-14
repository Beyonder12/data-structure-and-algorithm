
import java.util.*;
// O(nlogm)
class Solution {
    // public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
    //     int count = 0;
    //     TreeSet<Integer> treeSet = new TreeSet<>();
    //     for(int el : arr2) {
    //         treeSet.add(el);
    //     }
    //     for (int i = 0; i<arr1.length; i++) {
    //         int l = arr1[i] - d;
    //         int r = arr1[i] + d;
    //         Set<Integer> set = treeSet.subSet(l, r+1);
    //         if(set.isEmpty()) count++;
    //     }
    //     return count;
    // }

    public static void main(String[] args) {
        // Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
        // Output: 2
        int[] arr1 = new int[] {4,5,8}; int[] arr2 = new int[] {10, 9, 1, 8}; int d = 2;
        System.out.println(findTheDistanceValue(arr1, arr2, d));

        // Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
        // Output: 2

        int[] arr11 = new int[] {1,4,2,3}; int[] arr21 = new int[] {-4,-3,6,10,20,30}; int d1 = 3;
        System.out.println(findTheDistanceValue(arr11, arr21, d1));

        // Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
        // Output: 1
        int[] arr12 = new int[] {2,1,100,3}; int[] arr22 = new int[] {-5,-2,10,-3,7}; int d2 = 6;
        System.out.println(findTheDistanceValue(arr12, arr22, d2));
    }

    public static int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
        Arrays.sort(arr2);
        int res = 0;
        for(int i = 0; i < arr1.length; i++) {
            int close = findClosest(arr2, arr1[i]);
            if(Math.abs(arr1[i] - close) > d) res++;
        }
        return res;
    }

    static int findClosest(int[] arr, int target) {
        int d = Integer.MAX_VALUE;
        int low = 0, high = arr.length - 1;
        while(low <= high) {
            int mid = low + (high - low)/2;
            if(arr[mid] == target) return arr[mid];
            else if(arr[mid] < target) low = mid +1;
            else high = mid - 1;
            d = Math.abs(target - arr[mid]) < Math.abs(target - d) ? arr[mid] : d;
        }
        return d;
    }
    
    
    // public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
    //     Arrays.sort(arr2);
    //     int res = 0;
        
    //     for(int i=0;i<arr1.length;i++)
    //     {
    //         int close = findClosest(arr2,arr1[i]);
    //         if(Math.abs(arr1[i]-close) > d)
    //             res++;
    //     }
        
    //     return res;
    // }
    // int findClosest(int[] arr,int target)
    // {
    //     int d = Integer.MAX_VALUE;
    //     int low = 0,high = arr.length-1;
    //     while(low <= high)
    //     {
    //         int mid = low + (high - low)/2;
    //         if(arr[mid] == target)
    //             return arr[mid];
    //         else if(arr[mid] < target)
    //         {
    //             low = mid+1;
    //         }
    //         else 
    //         {
    //             high = mid-1;
    //         }
    //         d = Math.abs(target-arr[mid]) < Math.abs(target-d) ? arr[mid] : d;
    //     }
    //     return d;
    // }
}

