#include <iostream>

using namespace std;

class Solution {
    public:
    static string countAndSay(int n) {
        if (n == 1) return "1";//base case
        string res, tmp = countAndSay(n-1); //recursion
        char c = tmp[0];
        int count = 1;
        for (int i = 1; i < tmp.size(); i++)
            if(tmp[i] == c)
                count++;
            else {
                res+=to_string(count);
                res.push_back(c);
                c = tmp[i];
                count=1;
            }
        res+=to_string(count);
        res.push_back(c);
        return res;
    }
};

int main() {

    cout << Solution::countAndSay(4) << endl;
    return 0;
}
