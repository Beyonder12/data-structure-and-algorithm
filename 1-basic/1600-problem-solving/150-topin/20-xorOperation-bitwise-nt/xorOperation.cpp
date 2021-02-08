#include <iostream>

using namespace std;

int xorOperation(int n, int start) {
    int res = start;
    for (int i = 1; i < n; i++) {
        res = res ^ (start + 2 * i);
    }
    return res;
}

int main() {
    cout << xorOperation(5,0) << endl;

    return 0;
}