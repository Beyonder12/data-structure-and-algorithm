#include <iostream>
#include <vector>


using namespace std;

class Solution {
    public:
        
    static void permute(vector<int> nums, int i, vector< vector<int> > &ans) {
        if(i == nums.size()) {
            ans.push_back(nums);
            return;
        }
        for(int j = i; j < nums.size(); j++) {
            swap(nums[i],nums[j]);
            permute(nums,i+1,ans);
            swap(nums[i],nums[j]);
        }
    }
    static vector< vector<int> > permute(vector<int>& nums) {
        vector< vector<int> > ans;
        permute(nums,0,ans);
        return ans;
    }
};
int main() {
    vector< vector<int> > permute(vector<int>& nums);
    int arr[] = {1,2,3};
    cout << Solution::permute(arr) << endl;
}

// int main() {
//     int arr[] = {1,2,3};
//     for (int i = 0; i < *(&arr + 1) - arr; i++) {
//         cout << << endl;
//     }
    
// }