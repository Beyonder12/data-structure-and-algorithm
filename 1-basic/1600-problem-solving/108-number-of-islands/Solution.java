import java.util.LinkedList;
import java.util.Queue;

class Solution {

    public static void main(String[] args) {

        System.out.println(numIslands(
            new char[][] {  
                {'1','1','0','0','0'},
                {'1','1','0','0','0'},
                {'0','0','1','0','0'},
                {'0','0','0','1','1'}
            })
        );

        System.out.println(5*2+2);
    }

    private static final int[][] DIRECTIONS = { {1, 0}, {-1, 0}, {0, 1}, {0, -1} };

    public static int numIslands(char[][] grid) {
        if(grid == null || grid.length == 0) return 0;
        int islands = 0;
        int rows = grid.length;
        int cols = grid[0].length;
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                if(grid[i][j] == '1') {
                    ++islands;
                    fillWithWater(grid, rows, cols, i, j);
                }
            }
        }
        return islands;

    }

    private static void fillWithWater(char[][] grid, int rows, int cols, int i, int j) {
        Queue<Integer> queue = new LinkedList<>();
        //2D -> 1D = R * #cols + C
        //1D -> 2D = index / #cols = R, index % #cols = C
        queue.add(i * cols + j);
        grid[i][j] = '0';
        while(!queue.isEmpty()) {
            int index = queue.poll();
            int row = index / cols;
            int col = index % cols;
            for(int[] direction : DIRECTIONS) {
                int x = direction[0] + row;
                int y = direction[1] + col;
                if(x > -1 && x < rows && y > -1 && y < cols && grid[x][y] == '1') {
                    grid[x][y] = '0';
                    queue.add(x * cols + y);
                }
            }
        }
    }

    // public static int numIslands(char[][] grid) {
    //     int count=0;
    //     for(int i=0;i<grid.length;i++) {

    //         for(int j=0;j<grid[0].length;j++){
    //             if(grid[i][j]=='1'){
    //                 bfsFill(grid,i,j);
    //                 count++;
    //             }
    //         }
    //     }
    //     return count;
    // }

    // private static void bfsFill(char[][] grid,int x, int y) {
    //     grid[x][y]='0';
    //     int n = grid.length;
    //     int m = grid[0].length;
    //     Queue<Integer> queue = new LinkedList<Integer>();  
    //     int code = x*m+y;  
    //     queue.offer(code);  
    //     while(!queue.isEmpty())  
    //     {  
    //         code = queue.poll();  
    //         int i = code/m;  
    //         int j = code%m;  
    //         if(i>0 && grid[i-1][j]=='1')    //search upward and mark adjacent '1's as '0'.
    //         {  
    //             queue.offer((i-1)*m+j);  
    //             grid[i-1][j]='0';  
    //         }  
    //         if(i<n-1 && grid[i+1][j]=='1')  //down
    //         {  
    //             queue.offer((i+1)*m+j);  
    //             grid[i+1][j]='0';  
    //         }  
    //         if(j>0 && grid[i][j-1]=='1')  //left
    //         {  
    //             queue.offer(i*m+j-1);  
    //             grid[i][j-1]='0';  
    //         }  
    //         if(j<m-1 && grid[i][j+1]=='1')  //right
    //         {  
    //             queue.offer(i*m+j+1);  
    //             grid[i][j+1]='0';  
    //         }
    //     } 
    // }

}