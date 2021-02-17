#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    int static firstUniqChar(string s)
    {
        vector<int> v(26, 0);
        for (char c : s)
            v[c - 'a']++;
        for (int i = 0; i < s.length(); i++)
        {
            if (v[s[i] - 'a'] == 1)
                return i;
        }
        return -1;
    }
};

int main()
{
    cout << Solution::firstUniqChar("leetcode") << endl;
}