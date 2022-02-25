import java.util.ArrayList;
import java.util.List;

public class Solution {
    private static void findSum(int[] arr, int k) {
        int sum = 0;
        
        List<List<Integer>> res = new ArrayList<>();
        for(int i = 0; i < arr.length; i++) {
            sum += arr[i];
            for (int j = i + 1; j < arr.length; j++) {
                sum += arr[j];
                if(sum == k) {
                    List<Integer> subRes = new ArrayList<>();
                    subRes.add(arr[i]);
                    subRes.add(arr[j]);
                    res.add(subRes);
                    sum = 0;
                }
            }
        }
        System.out.println(res);
    }

    public static void main(String[] args) {
        findSum(new int[] {1,2,1,2,1,2,1,3}, 3);
    }
    
}


// function findSum(arr, k) {
//     let sum = 0, res = [];
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         for(let j = i + 1; j < arr.length; j++) {
//             sum += arr[j]
//             if(sum == k) {
//                 res.push([arr[i],arr[j]])
//                 sum = 0;
//             } 
//         }
//     }
//     return res;
    
// }

// console.log(findSum([1,2,1,2,1,2,1,3], 3));