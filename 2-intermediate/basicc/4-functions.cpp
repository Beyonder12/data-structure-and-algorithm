#include <iostream>
#include <cstdio> //this is standard input and otput in c programing language
using namespace std;

int max_of_four(int a, int b, int c, int d) {
    int list[4] = {a, b, c, d}, max = list[0];

    for (int i = 1; i < 4; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }

    return max;
};

int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;
    int ans = max_of_four(a, b, c, d);
    cout << ans << endl;

    return 0;
}