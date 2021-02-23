#include <iostream>
#include <vector>

using namespace std;

bool isPowerOfThree(int n) {
    return (n > 0 && 1162261467 % n == 0);
}

int main() {
    cout << isPowerOfThree(27) << endl;
    return 0;
}