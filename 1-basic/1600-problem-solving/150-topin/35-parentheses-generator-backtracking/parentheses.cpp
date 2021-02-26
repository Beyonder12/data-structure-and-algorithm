#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
    static vector<string> ans;
    void f(string s, int open, int close) { //open => '(' count remaining
        if(open == 0 && close==0) {         //close => ')' count remaining
            ans.push_back(s);
            return;
        }
        if(open>0)f(s+"(", open-1, close);
        if(open<close)f(s+")", open, close-1); // '(' must be placed before ')'
    }
    static vector<string> generateParenthesis(int n) {
        ans.clear();
        (f"",n,n);                              // Balanced string will have
        return ans;                             // n-open and n-closing brackets
    }
}

int main() {
    cout << Solution::generateParenthesis(3) << endl;
    return 0;
}