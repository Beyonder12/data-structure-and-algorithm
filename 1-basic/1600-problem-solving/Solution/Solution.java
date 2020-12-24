package Solution;
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> lexicalOrder(int n) {
        List<Integer> res = new ArrayList<>();
        dfs(n, 0, res);
        return res;
    }
    
    private void dfs(int n, int cur, List<Integer> res) {
        if (cur > n) return;
        if (cur != 0) {
            res.add(cur);
            dfs(n, 10 * cur, res);
        }
        for (int i = 1; i < 10 && cur + i <= n; ++i) {
            res.add(cur + i);
            dfs(n, 10 * (cur + i), res);
        }
    }
}