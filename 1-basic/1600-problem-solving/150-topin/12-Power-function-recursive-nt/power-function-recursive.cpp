#include <iostream>

using namespace std;

class Solution {

    public:
    static double myPow(double x, int n, double res = 1) {
        return n ? myPow(x * x, n / 2, n % 2 ? (n > 0 ? res * x : res / x) : res) : res;
    }

};

int main() {
    cout << Solution::myPow(2,-2);
}