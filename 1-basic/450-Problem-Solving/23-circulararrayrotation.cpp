#include <iostream>
#include <deque>
#include <vector>

using namespace std;

int main()
{
    int n, k, q;
    cin >> n >> k >> q;
    deque<int> arr(n);
    for (int &e : arr)
        cin >> e;

    // Rotate array
    for (int k_i = 0; k_i < k; k_i++) {
        int i = arr.back();
        arr.pop_back();
        arr.push_front(i);
    }

    vector<int> v(q);
    for (int &e : v)
        cin >> e;
    for (int e : v)
        cout << arr[e] << endl;
    return 0;
}