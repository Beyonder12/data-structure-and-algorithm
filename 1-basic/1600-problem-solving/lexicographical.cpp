class Solution {
public:
    vector<int> lexicalOrder(int n) {
        vector<int> res;
        int num = 1;
        for(int i = 1; i <= n; i++){
            res.push_back(num);
            if(num * 10 <= n){
                num *= 10;
            }
            else if(num % 10 != 9 && num + 1 <= n)
                num += 1;
             else{
                while(num % 10 == 9 || num == n)
                    num /= 10;
                num++;
            }
            
        }
        return res;
    }
};