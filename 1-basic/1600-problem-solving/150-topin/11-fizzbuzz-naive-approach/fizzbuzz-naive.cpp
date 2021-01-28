#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
    public:
    static std::vector<std::string> fizzBuzz(int n) {
        std:: vector<std::string> ret;

        std::string s;
        for (int i = 1; i <= n; ++i) {

            if (i % 5 == 0 && i % 3 == 0) s = "FizzBuzz";
            else if (i % 5 == 0) s = "Buzz";
            else if (i % 3 == 0) s = "Fizz";
            else s = std::to_string(i);

            ret.push_back(s);
        }
        return ret;
    }

   
};

int main() {
    cout << Solution::fizzBuzz(15) << endl;
}