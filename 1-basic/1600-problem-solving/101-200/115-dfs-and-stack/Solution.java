

class Solution {

    public static int numIslands(char[][] grid) {
        int count = 0;
        for(int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if(grid[i][j] == '1') {
                    dfsFill(grid, i, j);
                    count++;
                }
            }
        }
        return count;
    }

    private static void dfsFill(char[][] grid, int i, int j) {
        if( i >= 0 && j >= 0 && i < grid.length && j < grid[0].length && grid[i][j] == '1') {
            grid[i][j] = '0';
            dfsFill(grid, i + 1, j);
            dfsFill(grid, i - 1, j);
            dfsFill(grid, i, j + 1);
            dfsFill(grid, i, j - 1);
        }
    }

    public static void main(String[] args) {
        // Input: grid = [
        // ["1","1","1","1","0"],
        // ["1","1","0","1","0"],
        // ["1","1","0","0","0"],
        // ["0","0","0","0","0"]
        // ]
        // Output: 1

        char [][] grid = {

            {'1','1','1','1','0'},
            {'1','1','0','1','0'},
            {'1','1','0','0','0'},
            {'0','0','0','0','0'}
        };

        char [][] grid1 = {

            {'1','1','0','0','0'},
            {'1','1','0','0','0'},
            {'0','0','1','0','0'},
            {'0','0','0','1','1'}
        };
        
        System.out.println(numIslands(grid));
        System.out.println(numIslands(grid1));
         

    }

}