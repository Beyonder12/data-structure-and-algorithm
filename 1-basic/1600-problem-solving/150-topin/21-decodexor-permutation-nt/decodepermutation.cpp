#include <iostream>
#include <vector>

using namespace std;



int main() {

    vector<int> decode(vector<int>& A) {
    int n = A.size() + 1, a = 0;
    for (int i= 0; i <= n; ++i) {
        a ^= i ;
        if(i < n && i % 2 == 1) {
            a ^= A[i];
        }
    }
    vector<int> res = {a};
    for (int a: A) {
        res.push_back(res.back() ^ a);
    }
    return res;
}



    std::vector<int> A = {1,2,3};
    A = {1,2};
    std::cout << decode(A);

    return 0;
}