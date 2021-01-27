#include <iostream>
#include <map>
#include <unordered_map>
#include <string>


using namespace std;

class Solution {
    public:
    static bool isAnagram(string s, string t) {
        if(s.size() != t.size())
            return false;
        else
        {
            unordered_map<char,unsigned int> con;
            int check=0, tmp;
            for(int i = 0; i < s.size(); i++)
            {
                ++con[s[i]]||con.erase(s[i]);
                --con[t[i]]||con.erase(t[i]);
            }
            return con.size() == 0;
        }
    }

};

int main() {
    string s = "anagram";
    string t = "nagraam";
    cout << Solution::isAnagram(s,t) << endl;
    std::cout << std::boolalpha << Solution::isAnagram(s,t) << std::endl;
    return 0;
}