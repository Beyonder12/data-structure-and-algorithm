#include <iostream>
#include <vector>

using namespace std;


class Solution {
    public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        int x1=0;int x2=0;
        for(int i = 0; i < n; i++){
            x1=x1^nums[i]; // let say array is 3,0,1 then x1 will store 3^0^1
            x2=x2^(i+1); // here x2 will store 1^2^3
        }
        return x1^x2; // a^a=0, so the number present both in x1 and x2 will cancel out(become zero) and the element which is
        //not present in x1 . i.e 2 will be returned by the function.
    }
};

int main() {
    cout<<"hello"<< endl;

    return 0;
};