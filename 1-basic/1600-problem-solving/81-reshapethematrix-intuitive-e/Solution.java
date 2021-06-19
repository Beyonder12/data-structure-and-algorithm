import java.util.Arrays;














class Solution {

  public static void main(String[] args){
    int[][] arr = new int[][] {{1,2},{3,4}};
    System.out.println(Arrays.deepToString(matrixReshape(new int[][] {{1,2},{3,4}}, 4, 1)));
  }

  public static int[][] matrixReshape(int[][] nums, int r, int c){
    int rows = nums.length;
    int cols = nums[0].length;

    if(rows*cols != r*c) return nums;
    int[][] ans = new int[r][c];
    int rw=0;
    int cc=0;

    for(int i=0; i<rows; i++){
      for(int j=0; j<cols; j++){
        ans[rw][cc] = nums[i][j];
        cc++;
        if(cc == c){
          cc=0;
          rw++;
        }
      }
    }
    return ans;
  }
}
