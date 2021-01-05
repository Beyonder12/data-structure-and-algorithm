#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    vector<int>vec;
    int n, nums;
    cin >> n;
    
    while (n >> nums) 
    vec.push_back(nums);
 
    sort(vec.begin(), vec.end());
    
    for(int i=0; i<n; i++)
    cout << vec[i] << " ";
    return 0;
}
