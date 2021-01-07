#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

//Floyd's algorithm
int main() {

    int N,S,P,Q;
    const int m = 1 << 31;
    cin >> N >> S >> P >> Q;

    // build array
    int *a = new int[N];
    a[0] = S % m;
    for (int i = 1; i < N; ++i)
        a[i] = (a[i-1] * P + Q) % m;

    //cycle detection
    int i = 0, j = 0;
    while (true) {
        if (j >= N) {
            //no cycle
            cout << N;
            delete[] a;
            return 0;
        }

        i++; j+=2;
        if (a[i] == a[j])
            break;
    }

    // restart slow pointer from beginning to count unique numbers
    i = 0;
    while (a[i] != a[j]) {
        i++;
        j++;
    }

    cout << i;
    delete[] a;
    return 0;
}