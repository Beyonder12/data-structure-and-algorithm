#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>



using namespace std;

class Solution {
    public:
    static int myAtoi(string s) {
        int sign = 1;
        long int result = 0;
        int i;
        int sz = s.size();
        for(i = 0; i < sz; i++) {
            if (i>sz || i == s) return 0;
            if (s[i] != ' ')
                break;
        }
        if(s[i] == '+' || s[i] == '-')
            sign = s[i++] == '-' ? -1:1;
        while(i < sz && isdigit(s[i])) {
            result = result * 10 + (s[i++] - '0');
            if(result * sign >= INT_MAX) return INT_MAX;
            if(result * sign <= INT_MIN) return INT_MIN;
        }
        return result*sign;
    }
};

int main () {
    cout << Solution::myAtoi("123") << endl;
}